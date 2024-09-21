import * as React from "react"

import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Icons } from "@/components/icons"
import {
  DropdownMenuContentWrapper as DropdownMenuContent,
  ReportButtonContainer,
  ReportButtonOverlay,
  ReportButtonWrapper,
  ReportContentContainer,
  ReportOption,
  ReportOptionContainer,
  ReportOptionOverlay,
  ReportOptionWrapper,
} from "@/components/stream/information/report-btn/style"

export default function ReportBtn() {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <ReportButtonWrapper>
          <ReportButtonContainer>
            <ReportButtonOverlay>
              <Icons.threeDotVertical />
            </ReportButtonOverlay>
          </ReportButtonContainer>
        </ReportButtonWrapper>
      </DropdownMenuTrigger>

      <DropdownMenuContent side={"bottom"} align={"end"}>
        <ReportContentContainer>
          <ReportOptionWrapper>
            <ReportOptionContainer>
              <ReportOptionOverlay>
                <ReportOption>Report Live Stream</ReportOption>
              </ReportOptionOverlay>
            </ReportOptionContainer>

            <ReportOptionContainer>
              <ReportOptionOverlay>
                <ReportOption>Report Something Else</ReportOption>
              </ReportOptionOverlay>
            </ReportOptionContainer>
          </ReportOptionWrapper>
        </ReportContentContainer>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
