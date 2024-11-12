import { cookies } from "next/headers"
import type { NextRequest } from "next/server"
import { handleSelectLatestAccessToken } from "@/utils/auth.utils"
import { Auth } from "@modules/core/presentation/endpoints/auth/auth.request"
import type { ResetPasswordRequestDto } from "@modules/user/presentation/http/dto/request/auth/reset-password.request.dto"

export async function POST(request: NextRequest) {
  const json = (await request.json()) as ResetPasswordRequestDto

  const accessToken = handleSelectLatestAccessToken(request)

  try {
    await Auth.resetPassword(json)

    if (accessToken) {
      await Auth.logout({
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })

      cookies().delete("access-token")
      cookies().delete("refresh-token")
    }

    return Response.json(
      {},
      {
        status: 200,
      }
    )
  } catch (err) {
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
