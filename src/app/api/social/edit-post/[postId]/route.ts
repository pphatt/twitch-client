import type { NextRequest } from "next/server"
import { handleSelectLatestAccessToken } from "@/utils/auth.utils"
import { sleep } from "@/utils/common"
import { Social } from "@modules/core/presentation/endpoints/social/social.request"

export async function PATCH(
  request: NextRequest,
  { params }: { params: { postId: string } }
) {
  const accessToken = handleSelectLatestAccessToken(request)

  if (!accessToken) {
    return Response.json({ message: "Access Token Not Found" }, { status: 401 })
  }

  const { postId } = params

  const formData = await request.formData()
  const { content } = (await JSON.parse(formData.get("data") as string)) as {
    content: string
  }

  const images = formData.getAll("images") as File[] | null

  try {
    const formDataForApi = new FormData()
    formDataForApi.append("content", content)

    if (images?.length) {
      for (const image of images) {
        const file = new File([image], image.name, {
          type: image.type,
        })

        formDataForApi.append("images", file)
      }
    }

    await Social.editPost(
      { data: formDataForApi, postId },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "multipart/form-data",
        },
      }
    )

    if (images?.length) {
      await sleep(4000)
    }

    return Response.json(
      { message: "Edit post successfully" },
      {
        status: 200,
      }
    )
  } catch (err) {
    return Response.json(
      {
        message: `Something went wrong.`,
      },
      {
        status: 400,
      }
    )
  }
}
