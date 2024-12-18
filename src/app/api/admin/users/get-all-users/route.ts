import type { NextRequest } from "next/server"
import { handleSelectLatestAccessToken } from "@/utils/auth.utils"
import { AdminUsersRequest } from "@modules/core/presentation/endpoints/admin/users/admin.users.request"

export async function GET(request: NextRequest) {
  const accessToken = handleSelectLatestAccessToken(request)

  if (!accessToken) {
    return Response.json({ message: "Access Token Not Found" }, { status: 401 })
  }

  try {
    const { data } = await AdminUsersRequest.getAllUsers({
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        'Expires': '0',
      },
    })

    const resData = data.data

    return Response.json(
      {
        data: resData,
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
