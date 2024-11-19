import type { NextRequest } from "next/server"
import { handleSelectLatestAccessToken } from "@/utils/auth.utils"
import { UserRequest } from "@modules/core/presentation/endpoints/user/user.request"

export async function GET(request: NextRequest) {
  const accessToken = handleSelectLatestAccessToken(request)

  if (!accessToken) {
    return Response.json({ message: "Access Token Not Found" }, { status: 401 })
  }

  try {
    const { data } = await UserRequest.getStreamKey({
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })

    const resData = data.data

    return Response.json(
      {
        data: { ...resData },
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
