import type { NextRequest } from "next/server"
import { handleSelectLatestAccessToken } from "@/utils/auth.utils"
import type { TokenPayload } from "@modules/user/application/command/auth/jwt/token.payload"
import type { SetViewerTokenRequestDto } from "@modules/user/presentation/http/dto/request/user/set-viewer-token.request.dto"
import { jwtDecode } from "jwt-decode"
import { AccessToken } from "livekit-server-sdk"
import { v4 } from "uuid"
import {getRandomRgb} from "@/utils/common";

export async function POST(request: NextRequest) {
  // streamer / viewer
  const accessToken = handleSelectLatestAccessToken(request)
  let id
  let username

  if (accessToken) {
    const decode = jwtDecode<TokenPayload>(accessToken)
    id = decode.sub
    username = decode.username
  } else {
    id = v4()
    username = `guest#${Math.floor(Math.random() * 1000)}`
  }

  // streamer
  const json = (await request.json()) as SetViewerTokenRequestDto

  const { hostIdentity } = json

  if (!hostIdentity) {
    return Response.json(
      {
        message: "User not found",
      },
      {
        status: 404,
      }
    )
  }

  const isHost = id === hostIdentity

  const token = new AccessToken(
    process.env.LIVEKIT_API_KEY,
    process.env.LIVEKIT_API_SECRET,
    {
      identity: isHost ? `host-${id}` : id,
      name: username,
      metadata: JSON.stringify({
        color: getRandomRgb()
      }),
    }
  )

  token.addGrant({
    room: hostIdentity,
    roomJoin: true,
    canPublish: false,
    canPublishData: true,
  })

  const viewerToken = token.toJwt()

  return Response.json(
    {
      viewerToken,
    },
    {
      status: 200,
    }
  )
}
