import * as React from "react"
import { cookies } from "next/headers"
import { LiveStream } from "@modules/core/presentation/endpoints/livestream/livestream.request"
import { Social } from "@modules/core/presentation/endpoints/social/social.request"

import Room from "@/app/(lobby)/(channel)/[username]/_components/room"

export default async function ChannelPage({
  params,
}: {
  params: { username: string }
}) {
  const accessToken = cookies().get("access-token")?.value

  const { username } = params

  const { data } = await LiveStream.getStreamInfo({
    username,
  })

  const streamInfo = data.data

  let isUserFollowed = undefined

  if (accessToken) {
    const { data: isUserFollowedData } = await Social.isFollowUser(
      {
        destinationUserId: data.data.userId,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )

    isUserFollowed = isUserFollowedData.data
  }

  return (
    <Room
      accessToken={accessToken}
      stream={streamInfo}
      isUserFollowed={!!isUserFollowed}
    />
  )
}
