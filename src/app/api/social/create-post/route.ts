import type { NextRequest } from "next/server"
import { handleSelectLatestAccessToken } from "@/utils/auth.utils"
import { sleep } from "@/utils/common"
import { Social } from "@modules/core/presentation/endpoints/social/social.request"

export async function POST(request: NextRequest) {
  const accessToken = handleSelectLatestAccessToken(request)

  if (!accessToken) {
    return Response.json({ message: "Access Token Not Found" }, { status: 401 })
  }

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

    const { data: resData } = await Social.createPost(formDataForApi, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "multipart/form-data",
      },
    })

    if (images?.length) {
      await sleep(4000)
    }

    return Response.json(
      {
        data: resData.message,
      },
      {
        status: 200,
      }
    )
  } catch (err) {
    return Response.json(
      {
        message: "Something went wrong",
      },
      {
        status: 400,
      }
    )
  }
}
