import * as React from "react"
import { Suspense } from "react"
import dynamic from "next/dynamic"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import type { TokenPayload } from "@modules/user/application/command/auth/jwt/token.payload"
import { SocialRepository } from "@modules/user/infrastructure/repository/social.repository"
import { jwtDecode } from "jwt-decode"

const EditPostPage = dynamic(
  () => import("@/components/layouts/social/edit-post/edit-post-page"),
  {
    ssr: false,
  }
)

export default async function EditPost({
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

  const decoded = jwtDecode<TokenPayload>(accessToken)

  if (data.post.user.id !== decoded.sub) {
    redirect("/social")
  }

  return (
    <Suspense>
      <EditPostPage
        username={data.post.user.username}
        postId={data.post.info.id}
        content={data.post.info.content}
        images={data.post.info.images.map(({ url }) => url)}
      />
    </Suspense>
  )
}
