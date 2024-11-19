import { cookies } from "next/headers"
import type { NextRequest } from "next/server"
import {
  handleSelectLatestAccessToken,
  handleSelectLatestRefreshToken,
} from "@/utils/auth.utils"
import { UserRequest } from "@modules/core/presentation/endpoints/user/user.request"
import type { TokenPayload } from "@modules/user/application/command/auth/jwt/token.payload"
import { UserRepository } from "@modules/user/infrastructure/repository/user.repository"
import { jwtDecode } from "jwt-decode"
import {
  IngressAudioEncodingPreset,
  IngressInput,
  IngressVideoEncodingPreset,
  type CreateIngressOptions,
} from "livekit-server-sdk"
import { TrackSource } from "livekit-server-sdk/dist/proto/livekit_models"

import { ingressClient, resetIngresses } from "@/lib/livekit"

export async function POST(request: NextRequest) {
  const accessToken = handleSelectLatestAccessToken(request)

  if (!accessToken) {
    return Response.json({ message: "Access Token Not Found" }, { status: 401 })
  }

  const refreshToken = handleSelectLatestRefreshToken(request)

  if (!refreshToken) {
    return Response.json(
      { message: "Refresh Token Not Found" },
      { status: 401 }
    )
  }

  const { sub, username } = jwtDecode<TokenPayload>(accessToken)

  try {
    await resetIngresses(sub!)

    const options: CreateIngressOptions = {
      name: username,
      roomName: sub,
      participantName: username,
      participantIdentity: sub!,
    }

    options.video = {
      source: TrackSource.CAMERA,
      preset: IngressVideoEncodingPreset.H264_1080P_30FPS_3_LAYERS,
    }

    options.audio = {
      source: TrackSource.MICROPHONE,
      preset: IngressAudioEncodingPreset.OPUS_STEREO_96KBPS,
    }

    const ingress = await ingressClient.createIngress(
      IngressInput.RTMP_INPUT,
      options
    )

    if (!ingress || !ingress.url || !ingress.streamKey) {
      throw new Error("Failed to create ingress")
    }

    const {
      refreshToken: newRefreshToken,
      accessToken: newAccessToken,
      profile,
    } = await UserRepository.refreshToken({
      refreshToken,
    })

    if (newAccessToken) {
      cookies().set("access-token", newAccessToken)
    }

    if (newRefreshToken) {
      cookies().set("refresh-token", newRefreshToken)
    }

    if (profile) {
      cookies().set("profile", JSON.stringify(profile))
    }

    console.log(ingress.ingressId)

    await UserRequest.setStreamKey(
      {
        serverUrl: ingress.url,
        streamKey: ingress.streamKey,
      },
      {
        headers: {
          Authorization: `Bearer ${newAccessToken}`,
        },
      }
    )

    return Response.json(
      {},
      {
        status: 201,
      }
    )
  } catch (err) {
    console.log(err)
    return Response.json(
      {
        message: err,
      },
      {
        status: 400,
      }
    )
  }
}
