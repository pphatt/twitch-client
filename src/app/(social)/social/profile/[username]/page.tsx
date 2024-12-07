import * as React from "react"
import dynamic from "next/dynamic"
import { cookies } from "next/headers"
import { Social } from "@modules/core/presentation/endpoints/social/social.request"
import { UserRequest } from "@modules/core/presentation/endpoints/user/user.request"
import type { TokenPayload } from "@modules/user/application/command/auth/jwt/token.payload"
import { jwtDecode } from "jwt-decode"

const ProfilePageComponent = dynamic(
  () => import("@/components/layouts/social/profile/profile-page"),
  { ssr: false }
)

export default async function SocialProfile({
  params,
}: {
  params: { username: string }
}) {
  const { username } = params

  const accessToken = cookies().get("access-token")?.value

  const { data: userData } = await UserRequest.getSpecificUserByName({
    username,
  })

  const { data: postsListData } = await Social.getUserPosts(username)

  let isUserProfile = false
  let isUserFollowed = undefined

  if (accessToken) {
    const decoded = jwtDecode<TokenPayload>(accessToken)

    if (decoded.sub === userData.data.id) {
      isUserProfile = true
    }

    const { data: isUserFollowedData } = await Social.isFollowUser(
      {
        destinationUserId: userData.data.id,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )

    isUserFollowed = isUserFollowedData.data
  }

  return (
    <ProfilePageComponent
      isUserProfile={isUserProfile}
      user={userData.data}
      postsInfo={postsListData.data}
      isUserFollowed={!!isUserFollowed}
      isTheSameUser={isUserProfile}
    />
  )
}
