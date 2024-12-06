"use client"

import * as React from "react"
import { Social } from "@modules/core/presentation/endpoints/social/social.request"

interface ProcessViewCountWrapProps {
  postId: string
  accessToken: string
  children: React.ReactNode
}

export default function ProcessViewCountWrap({
  postId,
  accessToken,
  children,
}: ProcessViewCountWrapProps) {
  React.useEffect(() => {
    async function processView() {
      await Social.viewPost(
        { postId },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
    }

    void processView()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <>{children}</>
}
