import type { NextRequest } from "next/server"
import { handleSelectLatestAccessToken } from "@/utils/auth.utils"
import { Social } from "@modules/core/presentation/endpoints/social/social.request"

export async function GET(
  request: NextRequest,
  { params }: { params: { postId: string } }
) {
  const accessToken = handleSelectLatestAccessToken(request)

  if (!accessToken) {
    return Response.json({ message: "Access Token Not Found" }, { status: 401 })
  }

  const { postId } = params

  try {
    const { data } = await Social.getPostDetails(
      { postId },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )

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
