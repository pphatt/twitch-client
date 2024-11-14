import * as React from "react"

import ProfilePageHeader from "@/components/dashboard-profile/profile-page-header"
import {
  ContentWrapper,
  EmptyPaddingContainer,
  EmptyPaddingOverlay,
  EmptyPaddingWrapper,
  PageContainer,
  PageOverlay,
  PageWrapper,
  ScrollContentWrapper,
  ScrollLayoutContentContainer,
  ScrollLayoutContentWrapper,
} from "@/components/dashboard-profile/profile-page-layout/style"
import SimpleBar from "@/components/simplebar"

interface ProfilePageLayoutProps {
  children: React.ReactNode
}

export default function ProfilePageLayout({
  children,
}: ProfilePageLayoutProps) {
  return (
    <PageWrapper>
      <PageContainer>
        <PageOverlay>
          <SimpleBar forceShowXAxis={false} autoHide={true}>
            <ScrollContentWrapper>
              <EmptyPaddingWrapper>
                <EmptyPaddingContainer>
                  <EmptyPaddingOverlay />
                </EmptyPaddingContainer>
              </EmptyPaddingWrapper>

              <SimpleBar forceVisible={"y"}>
                <ScrollLayoutContentWrapper>
                  <ScrollLayoutContentContainer>
                    <ProfilePageHeader />

                    <ContentWrapper>{children}</ContentWrapper>
                  </ScrollLayoutContentContainer>
                </ScrollLayoutContentWrapper>
              </SimpleBar>
            </ScrollContentWrapper>
          </SimpleBar>
        </PageOverlay>
      </PageContainer>
    </PageWrapper>
  )
}
