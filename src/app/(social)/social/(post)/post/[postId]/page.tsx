import * as React from "react"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { Social } from "@modules/core/presentation/endpoints/social/social.request"
import { SocialRepository } from "@modules/user/infrastructure/repository/social.repository"
import DetailsPageComponent from "src/components/layouts/social/details/details-page"
import {jwtDecode} from "jwt-decode";
import type {TokenPayload} from "@modules/user/application/command/auth/jwt/token.payload";

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

  let isUserPost = false

  if (accessToken) {
    const decoded = jwtDecode<TokenPayload>(accessToken)

    if (decoded.sub === data.post.user.id) {
      isUserPost = true
    }
  }

  await Social.viewPost(
    { postId },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  )

  return (
    <DetailsPageComponent
      post={data.post}
      comments={postComments.data.comments}
      isUserPost={isUserPost}
      isPostDelete={false}
    />
  )
}
