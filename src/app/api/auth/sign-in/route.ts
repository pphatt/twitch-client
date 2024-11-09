import { cookies } from "next/headers"
import { userAgent, type NextRequest } from "next/server"
import { Auth } from "@modules/core/presentation/endpoints/auth/auth.request"
import type { FormSignInRequestDto } from "@modules/user/presentation/http/dto/request/auth/signin.request.dto"

export async function POST(request: NextRequest) {
  const json = (await request.json()) as FormSignInRequestDto

  const { username, password } = json

  const ipAddress =
    (request.headers.get("x-forwarded-for") ?? "127.0.0.1").split(",")[0] ??
    "127.0.0.1"

  const { device, ua } = userAgent(request)

  const deviceType = device.type === "mobile" ? "MOBILE" : "DESKTOP"

  try {
    const { data } = await Auth.signIn({
      username,
      password,
      deviceName: "iPhone 13",
      userAgent: ua,
      ipAddress: ipAddress,
      deviceType: deviceType,
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
