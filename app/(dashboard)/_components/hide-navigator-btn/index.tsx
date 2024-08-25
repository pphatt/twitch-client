"use client"

import * as React from "react"
import { useDashboardOpen } from "@/store/persistent/dashboard"

import { Icons } from "@/components/icons"
import {
  SiteHeaderButton,
  SiteHeaderButtonContainer,
  SiteHeaderButtonWrapper,
} from "@/app/(dashboard)/_components/hide-navigator-btn/style"

export default function HideNavigatorBtn() {
  const { mode, setMode } = useDashboardOpen()

  return (
    <SiteHeaderButtonWrapper>
      <SiteHeaderButtonContainer>
        <SiteHeaderButton
          onClick={() =>
            mode === "default" || mode === "compact"
              ? setMode("hidden")
              : setMode("default")
          }
        >
          <div>
            <Icons.hideNavigator />
          </div>
        </SiteHeaderButton>
      </SiteHeaderButtonContainer>
    </SiteHeaderButtonWrapper>
  )
}
