import type { NextRequest } from "next/server"
import { handleSelectLatestAccessToken } from "@/utils/auth.utils"
import { LiveStream } from "@modules/core/presentation/endpoints/livestream/livestream.request"
import type { SetStreamInfoRequestDto } from "@modules/user/presentation/http/dto/request/livestream/set-stream-info.request.dto"

export async function POST(request: NextRequest) {
  const accessToken = handleSelectLatestAccessToken(request)

  if (!accessToken) {
    return Response.json({ message: "Access Token Not Found" }, { status: 401 })
  }

  const json = (await request.json()) as SetStreamInfoRequestDto

  const { title, categoryId } = json

  try {
    await LiveStream.setStreamInfo(
      { title, categoryId },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )

    return Response.json(
      {
        message: "Set stream info successfully",
      },
      {
        status: 201,
      }
    )
  } catch (err) {
    console.log(err)
    return Response.json(
      {
        message: err,
      },
      {
        status: 400,
      }
    )
  }
}
