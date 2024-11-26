import * as React from "react"

import SimpleBar from "@/components/simplebar"
import {
  QuickActionPanelContainer,
  QuickActionPanelWrapper,
} from "@/components/stream-manager/panel/quick-action-panel/style"
import EditStreamInfo from "@/components/stream-manager/quick-action-options/edit-stream-info"

interface QuickActionPanelProps {
  title: string | undefined
}

export default function QuickActionPanel({ title }: QuickActionPanelProps) {
  return (
    <QuickActionPanelWrapper>
      <SimpleBar
        forceVisible={"y"}
        simpleContentWrapperStyle={{
          padding: 0,
        }}
      >
        <QuickActionPanelContainer>
          <EditStreamInfo title={title} />
        </QuickActionPanelContainer>
      </SimpleBar>
    </QuickActionPanelWrapper>
  )
}
