import type { NextRequest } from "next/server"
import { handleSelectLatestAccessToken } from "@/utils/auth.utils"
import { AdminRolesRequest } from "@modules/core/presentation/endpoints/admin/role/admin.roles.request"

export async function GET(request: NextRequest) {
  const accessToken = handleSelectLatestAccessToken(request)

  if (!accessToken) {
    return Response.json({ message: "Access Token Not Found" }, { status: 401 })
  }

  try {
    const { data } = await AdminRolesRequest.getAllRoles({
      headers: {
        Authorization: `Bearer ${accessToken}`,
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
