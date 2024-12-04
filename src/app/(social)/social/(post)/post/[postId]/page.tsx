import * as React from "react"
import DetailsPageComponent from "src/components/layouts/social/details/details-page"

export default function ArticleDetailsPage({
  params,
}: {
  params: { postId: string }
}) {
  return <DetailsPageComponent />
}