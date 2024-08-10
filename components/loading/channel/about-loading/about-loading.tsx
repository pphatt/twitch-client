import * as React from "react"

import {
  AboutPanelContainer,
  AboutPanelWrapper,
  AboutSectionWrapper,
  ChannelAboutLayoutWrapper,
  ChannelExtensionWrapper,
} from "@/components/loading/channel/about-loading/style"

export default function AboutLoading() {
  return (
    <ChannelAboutLayoutWrapper>
      <AboutPanelWrapper>
        <section
          id="live-channel-about-panel"
          aria-label="About Panel"
          aria-hidden="false"
          tabIndex={0}
          style={{
            display: "block",
          }}
        >
          <AboutPanelWrapper
            style={{
              position: "relative",
            }}
          >
            <div>
              <AboutPanelContainer>
                <AboutSectionWrapper data-a-target="about-panel" />

                <div data-a-target="goal-panel"></div>
              </AboutPanelContainer>
            </div>
          </AboutPanelWrapper>
        </section>
      </AboutPanelWrapper>

      <div>
        <ChannelExtensionWrapper />
      </div>
    </ChannelAboutLayoutWrapper>
  )
}
