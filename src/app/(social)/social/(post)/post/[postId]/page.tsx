import * as React from "react"
import dynamic from "next/dynamic"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { Social } from "@modules/core/presentation/endpoints/social/social.request"
import type { TokenPayload } from "@modules/user/application/command/auth/jwt/token.payload"
import { SocialRepository } from "@modules/user/infrastructure/repository/social.repository"
import { jwtDecode } from "jwt-decode"

import type { EReactionType } from "@/components/layouts/social/details/reaction-button"

const DetailsPageComponent = dynamic(
  () => import("@/components/layouts/social/details/details-page"),
  { ssr: false }
)

async function getSortedReactions(postId: string, accessToken: string) {
  const reactionTypes = [
    "LIKE",
    "LOVE",
    "HAHA",
    "SAD",
    "ANGRY",
  ] as EReactionType[]

  // Fetch data for each reaction type
  const reactions = await Promise.all(
    reactionTypes.map(async (type) => {
      const { data } = await Social.getPostReaction(
        { postId, reactionType: type },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      return { type, ...data.data }
    })
  )

  const removeReactionsCountEqualsZero = reactions.filter(
    (reaction) => reaction.reactionCount > 0
  )

  const sortedReactions = removeReactionsCountEqualsZero.sort(
    (a, b) => b.reactionCount - a.reactionCount
  )

  return sortedReactions
}

export default async function PostDetailsPage({
  params,
}: {
  params: { postId: string }
}) {
  const { postId } = params
  const accessToken = cookies().get("access-token")?.value

  if (!accessToken) {
    redirect("/social")
  }

  const { data } = await SocialRepository.getPostDetails({
    postId,
    accessToken: accessToken,
  })

  if (!data) {
    redirect("/social")
  }

  const { data: postComments } = await Social.getPostComments({
    postId,
    accessToken,
  })

  const sortedReactions = await getSortedReactions(postId, accessToken)

  let isUserPost = false
  let currentUserReactionType = ""
  let isUserFollowed = undefined

  if (accessToken) {
    const decoded = jwtDecode<TokenPayload>(accessToken)

    if (decoded.sub === data.post.user.id) {
      isUserPost = true
    }

    currentUserReactionType =
      sortedReactions.find((reaction) =>
        reaction.users.some((user) => user.id === decoded.sub)
      )?.type ?? ""

    const { data: isUserFollowedData } = await Social.isFollowUser(
      {
        destinationUserId: data.post.user.id,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )

    isUserFollowed = isUserFollowedData.data
  }

  const { data: listFriendData } = await Social.getMyListFriend({
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })

  return (
    <DetailsPageComponent
      post={data.post}
      listFriendData={listFriendData.data.friends}
      comments={postComments.data.comments}
      sortedReactions={sortedReactions}
      isUserPost={isUserPost}
      currentUserReactionType={currentUserReactionType}
      isPostDelete={false}
      isUserFollowed={!!isUserFollowed}
      accessToken={accessToken}
    />
  )
}
