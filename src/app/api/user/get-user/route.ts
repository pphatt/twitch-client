import type { NextRequest } from "next/server"
import { UserProfileAPI } from "@modules/core/presentation/endpoints/user.endpoints"

import { authAxiosInstance } from "@/components/axios-instance.auth"

export async function GET(request: NextRequest) {
  const accessToken = request.cookies.get("access-token")?.value

  if (!accessToken) {
    return Response.json(
      {},
      {
        status: 401,
        statusText: "Access Token Not Found",
      }
    )
  }

  const response = await authAxiosInstance.get(UserProfileAPI, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })

  const { id } = response.data as { id: string }

  return Response.json(
    {
      id,
    },
    {
      status: 200,
    }
  )
}
