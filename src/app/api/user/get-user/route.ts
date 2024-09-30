import type { NextRequest } from "next/server"

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

  const response = await authAxiosInstance.get(
    "http://localhost:3001/auth/user",
    {
      headers: {
        Authorization: `Bearer ${request.cookies.get("access-token")?.value}`,
      },
    }
  )

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
