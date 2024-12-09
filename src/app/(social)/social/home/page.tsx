import * as React from "react"
import dynamic from "next/dynamic"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { Social } from "@modules/core/presentation/endpoints/social/social.request"

const HomePageComponent = dynamic(
  () => import("@/components/layouts/social/home/home-page"),
  {
    ssr: false,
  }
)

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
