import * as React from "react"

import {
  ShowPreviewButton,
  ShowPreviewButtonContainer,
  ShowPreviewButtonRowContainer,
  ShowPreviewButtonText,
} from "@/components/dashboard-profile/show-preview/style"

interface ShowPreviewButtonProps {
  openReview: boolean
  setOpenReview: () => void
}

export default function ShowPreviewBtn({
  openReview,
  setOpenReview,
}: ShowPreviewButtonProps) {
  return (
    <ShowPreviewButtonRowContainer>
      <ShowPreviewButton onClick={setOpenReview}>
        <ShowPreviewButtonContainer>
          <ShowPreviewButtonText>
            {openReview ? "Hide Preview" : "Show Preview"}
          </ShowPreviewButtonText>
        </ShowPreviewButtonContainer>
      </ShowPreviewButton>
    </ShowPreviewButtonRowContainer>
  )
}
