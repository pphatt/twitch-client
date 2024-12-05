import * as React from "react"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { SocialRepository } from "@modules/user/infrastructure/repository/social.repository"
import DetailsPageComponent from "src/components/layouts/social/details/details-page"

export default async function ArticleDetailsPage({
  params,
}: {
  params: { postId: string }
}) {
  const { postId } = params
  const accessToken = cookies().get("access-token")?.value

  if (!accessToken) {
    redirect("/social")
  }

  const {data} = await SocialRepository.getPostDetails({
    postId,
    accessToken: accessToken,
  })

  return <DetailsPageComponent post={data.post} />
}
