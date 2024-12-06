import type { NextRequest } from "next/server"
import { handleSelectLatestAccessToken } from "@/utils/auth.utils"
import { Social } from "@modules/core/presentation/endpoints/social/social.request"

export async function GET(request: NextRequest) {
  const accessToken = handleSelectLatestAccessToken(request)

  if (!accessToken) {
    return Response.json({ message: "Access Token Not Found" }, { status: 401 })
  }

  const { searchParams } = new URL(request.url)

  const postId = searchParams.get("postId")
  const reactionType = searchParams.get("reactionType")

  if (!postId) {
    return Response.json(
      {
        message: "Post id is missing",
      },
      {
        status: 400,
      }
    )
  }

  if (!reactionType) {
    return Response.json(
      {
        message: "Reaction type is missing",
      },
      {
        status: 400,
      }
    )
  }

  try {
    const { data } = await Social.getPostReaction(
      { postId, reactionType },
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
        message: "Something went wrong",
      },
      {
        status: 400,
      }
    )
  }
}
