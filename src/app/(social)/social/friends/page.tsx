import * as React from "react"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { Social } from "@modules/core/presentation/endpoints/social/social.request"

import FriendsPageComponent from "@/components/layouts/social/friends/friends-page"

export default async function FriendsPage() {
  const accessToken = cookies().get("access-token")?.value

  if (!accessToken) {
    redirect("/")
  }

  const { data } = await Social.getMyListFriend({
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })

  return <FriendsPageComponent friends={data.data.friends} />
}
