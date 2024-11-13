import { cookies } from "next/headers"
import { userAgent, type NextRequest } from "next/server"
import { EUserStatus } from "@modules/core/domain-base/entity/enum/user-status.enum"
import { User } from "@modules/core/domain-base/entity/identity/user.entity"
import { Auth } from "@modules/core/presentation/endpoints/auth/auth.request"
import { BackendURL } from "@modules/core/presentation/endpoints/default.endpoints"
import type { TokenPayload } from "@modules/user/application/command/auth/jwt/token.payload"
import type { FormSignInRequestDto } from "@modules/user/presentation/http/dto/request/auth/signin.request.dto"
import axios from "axios"
import { jwtDecode } from "jwt-decode"

export async function POST(request: NextRequest) {
  const json = (await request.json()) as FormSignInRequestDto

  const { username, password } = json

  const ipAddress = request.headers.get("X-Forwarded-For") ?? "127.0.0.1"

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

    const decode = jwtDecode<TokenPayload>(accessToken)

    // guard here for unverified user
    if (decode.status === EUserStatus.BANNED) {
      return Response.json(
        {
          message: "User account are banned",
        },
        {
          status: 200,
        }
      )
    }

    // guard here for unverified user
    if (decode.status === EUserStatus.UNVERIFIED) {
      return Response.json(
        {
          refreshToken,
          accessToken,
          profile: null,
        },
        {
          status: 200,
        }
      )
    }

    if (accessToken) {
      cookies().set("access-token", accessToken)
    }

    if (refreshToken) {
      cookies().set("refresh-token", refreshToken)
    }

    const { data: userProfileResponse } = (await axios.get(
      `${BackendURL}/users/specific-user/${decode.sub}`
    )) as { data: { data: User } }

    if (userProfileResponse) {
      cookies().set("profile", JSON.stringify(userProfileResponse.data))
    }

    return Response.json(
      {
        refreshToken,
        accessToken,
        profile: userProfileResponse.data,
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
