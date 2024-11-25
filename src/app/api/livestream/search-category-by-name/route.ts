import type { NextRequest } from "next/server"
import { handleSelectLatestAccessToken } from "@/utils/auth.utils"
import { LiveStream } from "@modules/core/presentation/endpoints/livestream/livestream.request"

export async function GET(request: NextRequest) {
  const accessToken = handleSelectLatestAccessToken(request)

  if (!accessToken) {
    return Response.json({ message: "Access Token Not Found" }, { status: 401 })
  }

  const url = new URL(request.url)
  const keyword = url.searchParams.get("keyword")

  if (!keyword) {
    return Response.json({ message: "Keyword Not Found" }, { status: 400 })
  }

  try {
    const { data } = await LiveStream.searchCategoryByName(
      { keyword },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )

    const resData = data.data

    return Response.json(
      {
        data: resData,
      },
      {
        status: 200,
      }
    )
  } catch (err) {
    return Response.json(
      {
        message: "UNAUTHORIZED",
      },
      {
        status: 400,
      }
    )
  }
}
