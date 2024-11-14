import * as React from "react"

import {
  IconSpinner,
  InnerSubmitBtnText,
  InnerSubmitBtnWrapper,
  StatusLine,
  SubmitBtnComp,
  SubmitBtnContainer,
  SubmitBtnWrapper,
} from "@/components/dashboard-profile/submit-btn/style"

interface SubmitBtnWrapperProps {
  isPending: boolean

  disabled: boolean
}

export default function SubmitBtn({
  isPending,
  disabled,
}: SubmitBtnWrapperProps) {
  return (
    <SubmitBtnWrapper>
      <SubmitBtnContainer>
        <div>
          <StatusLine />

          <SubmitBtnComp type={"submit"} disabled={disabled}>
            <InnerSubmitBtnWrapper>
              <InnerSubmitBtnText>
                {isPending && <IconSpinner aria-hidden="true" />}
                Save Changes
              </InnerSubmitBtnText>
            </InnerSubmitBtnWrapper>
          </SubmitBtnComp>
        </div>
      </SubmitBtnContainer>
    </SubmitBtnWrapper>
  )
}
