import * as React from "react"

import {
  HeaderLayoutContainer,
  HeaderLayoutOverlay,
  HeaderLayoutWrapper,
  HeaderListItemContainer,
  HeaderListItemOverlay,
  HeaderListItems,
  HeaderListItemText,
  HeaderListItemTextWrapper,
  HeaderListItemWrapper,
  UnderlineTextContainer,
  UnderlineTextWrapper,
} from "@/components/dashboard-profile/profile-page-header/style"

export default function ProfilePageHeader() {
  return (
    <HeaderLayoutWrapper>
      <HeaderLayoutContainer>
        <HeaderLayoutOverlay>
          <HeaderListItems>
            <HeaderListItemWrapper>
              <HeaderListItemContainer href={"/u/admin2/settings/channel"}>
                <HeaderListItemOverlay>
                  <HeaderListItemTextWrapper>
                    <HeaderListItemText>About</HeaderListItemText>
                  </HeaderListItemTextWrapper>
                </HeaderListItemOverlay>
              </HeaderListItemContainer>

              <UnderlineTextWrapper>
                <UnderlineTextContainer />
              </UnderlineTextWrapper>
            </HeaderListItemWrapper>
          </HeaderListItems>
        </HeaderLayoutOverlay>
      </HeaderLayoutContainer>
    </HeaderLayoutWrapper>
  )
}
