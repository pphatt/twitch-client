import { cookies } from "next/headers"
import { userAgent, type NextRequest } from "next/server"
import { Auth } from "@modules/core/presentation/endpoints/auth/auth.request"
import type { FormSignInRequestDto } from "@modules/user/presentation/http/dto/request/auth/signin.request.dto"

export async function POST(request: NextRequest) {
  const json = (await request.json()) as FormSignInRequestDto

  const { username, password } = json

  // const ipAddress = (
  //   request.headers.get("x-forwarded-for") ?? "127.0.0.1"
  // ).split(",")[0]

  // const { device, ua } = userAgent(request)

  try {
    const { data } = await Auth.signIn({
      username,
      password,
      deviceName: "iPhone 13",
      userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 15_2 like Mac OS X)",
      ipAddress: "192.168.1.1",
      deviceType: "MOBILE",
    })

    const { refreshToken, accessToken } = data.data

    if (accessToken) {
      cookies().set("access-token", accessToken)
    }

    if (refreshToken) {
      cookies().set("refresh-token", refreshToken)
    }

    return Response.json(
      {
        refreshToken,
        accessToken,
      },
      {
        status: 200,
      }
    )
  } catch (err) {
    console.log(err)
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
