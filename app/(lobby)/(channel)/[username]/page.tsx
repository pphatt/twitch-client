import * as React from "react"

import { sleep } from "@/lib/utils"

export default async function ChannelPage() {
  const [] = await Promise.all([sleep(5000), sleep(1000)])

  return (
    <div>
      <div></div>
    </div>
  )
}
