import type { NextRequest } from "next/server"
import { handleSelectLatestAccessToken } from "@/utils/auth.utils"
import { Auth } from "@modules/core/presentation/endpoints/auth/auth.request"

export async function POST(request: NextRequest) {
  const accessToken = handleSelectLatestAccessToken(request)

  if (!accessToken) {
    return Response.json({ message: "Access Token Not Found" }, { status: 401 })
  }

  try {
    const { status, statusText } = await Auth.logout({
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })

    return Response.json(
      {
        message: statusText,
      },
      {
        status,
      }
    )
  } catch (err) {
    return Response.json(
      {
        message: "Invalid credentials",
      },
      {
        status: 400,
      }
    )
  }
}
