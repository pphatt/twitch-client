import * as React from "react"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { Social } from "@modules/core/presentation/endpoints/social/social.request"
import HomePageComponent from "src/components/layouts/social/home/home-page"

export default async function HomePage() {
  const accessToken = cookies().get("access-token")?.value

  if (!accessToken) {
    redirect("/")
  }

  const { data: feedData } = await Social.getMyFeed({
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })

  return (
    <HomePageComponent feed={feedData.data.posts} accessToken={accessToken} />
  )
}
