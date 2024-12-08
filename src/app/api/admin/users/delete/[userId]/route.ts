import type { NextRequest } from "next/server"
import { handleSelectLatestAccessToken } from "@/utils/auth.utils"
import { AdminUsersRequest } from "@modules/core/presentation/endpoints/admin/users/admin.users.request"

export async function DELETE(
  request: NextRequest,
  { params }: { params: { userId: string } }
) {
  const accessToken = handleSelectLatestAccessToken(request)

  if (!accessToken) {
    return Response.json({ message: "Access Token Not Found" }, { status: 401 })
  }

  const { userId } = params

  try {
    await AdminUsersRequest.deleteUser(
      { userId },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )

    return Response.json(
      {
        message: "Delete user successfully",
      },
      {
        status: 200,
      }
    )
  } catch (err) {
    console.log(err)
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
