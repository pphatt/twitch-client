import * as React from "react"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { Social } from "@modules/core/presentation/endpoints/social/social.request"

import RequestPageComponent from "@/components/layouts/social/friends/request-page"

export default async function FriendsPage() {
  const accessToken = cookies().get("access-token")?.value

  if (!accessToken) {
    redirect("/")
  }

  const { data } = await Social.getMyFriendRequest({
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })

  return <RequestPageComponent friends={data.data.friendRequests} />
}
