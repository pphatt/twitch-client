import { cookies } from "next/headers"
import { NextResponse, type NextRequest } from "next/server"
import { SignInAPI } from "@modules/core/presentation/endpoints/auth.endpoints"
import type { SigninRequestDto } from "@modules/user/presentation/http/dto/request/auth/signin.request.dto"
import type { SigninResponseDto } from "@modules/user/presentation/http/dto/response/auth/signin.response.dto"
import axios from "axios"

export async function POST(request: NextRequest) {
  if (request.method !== "POST") {
    return NextResponse.json(
      {
        message: `Method ${request.method.toUpperCase()} not implemented.`,
      },
      {
        status: 405,
      }
    )
  }

  const json = (await request.json()) as SigninRequestDto

  const { username, password } = json

  const response = await axios.post(SignInAPI, {
    email: username,
    password,
  })

  const { refreshToken, accessToken } = response.data as SigninResponseDto

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
}
