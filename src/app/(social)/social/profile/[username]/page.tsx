import * as React from "react"
import { cookies } from "next/headers"
import { Social } from "@modules/core/presentation/endpoints/social/social.request"
import { UserRequest } from "@modules/core/presentation/endpoints/user/user.request"
import type { TokenPayload } from "@modules/user/application/command/auth/jwt/token.payload"
import { jwtDecode } from "jwt-decode"

import ProfilePageComponent from "@/components/layouts/social/profile/profile-page"

export const dynamic = "force-dynamic"

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

  if (accessToken) {
    const decoded = jwtDecode<TokenPayload>(accessToken)

    if (decoded.sub === userData.data.id) {
      isUserProfile = true
    }
  }

  return (
    <ProfilePageComponent
      isUserProfile={isUserProfile}
      user={userData.data}
      postsInfo={postsListData.data}
    />
  )
}
