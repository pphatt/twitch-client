import * as React from "react"
import { Suspense } from "react"
import dynamic from "next/dynamic"

const CreatePostPage = dynamic(
  () => import("@/components/layouts/social/create-post/create-post-page"),
  {
    ssr: false,
  }
)

export default function CreatePost() {
  return (
    <Suspense>
      <CreatePostPage />
    </Suspense>
  )
}
