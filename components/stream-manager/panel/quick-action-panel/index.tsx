import * as React from "react"

import SimpleBar from "@/components/simplebar"
import {
  QuickActionPanelContainer,
  QuickActionPanelWrapper,
} from "@/components/stream-manager/panel/quick-action-panel/style"
import EditStreamInfo from "@/components/stream-manager/quick-action-options/edit-stream-info"

export default function QuickActionPanel() {
  return (
    <QuickActionPanelWrapper>
      <SimpleBar
        forceVisible={"y"}
        simpleContentWrapperStyle={{
          padding: 0,
        }}
      >
        <QuickActionPanelContainer>
          <EditStreamInfo />
        </QuickActionPanelContainer>
      </SimpleBar>
    </QuickActionPanelWrapper>
  )
}
