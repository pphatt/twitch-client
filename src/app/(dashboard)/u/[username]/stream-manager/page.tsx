import * as React from "react"
import { LiveStream } from "@modules/core/presentation/endpoints/livestream/livestream.request"

import StreamManagerPanel from "@/app/(dashboard)/u/[username]/stream-manager/_components/stream-manager"

export default async function StreamManagerPage({
  params,
}: {
  params: { username: string }
}) {
  const { username } = params

  const { data } = await LiveStream.getStreamInfo({
    username,
  })

  return (
    <>
      <StreamManagerPanel title={data.data.title} />
    </>
  )
}
