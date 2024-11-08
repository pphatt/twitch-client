import * as React from "react"
import { SHARE_LINK } from "src/constants"
import { cn } from "@/utils/common"

import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Icons } from "@/components/icons"
import {
  ShareContentWrapper as DropdownMenuContent,
  ShareButtonTooltipWrapper as Hint,
  ShareButtonContainer,
  ShareButtonOverlay,
  ShareButtonWrapper,
  ShareContentContainer,
  ShareTitle,
  SocialButtonContainer,
  SocialButtonOverlay,
  SocialButtonText,
  SocialButtonWrapper,
  SocialLinkWrapper,
} from "@/components/stream/information/share-btn/style"
import styles from "@/components/stream/information/share-btn/style.module.scss"

export default function ShareStreamBtn() {
  return (
    <DropdownMenu modal={false}>
      <Hint
        label={"Share"}
        delayDuration={0}
        skipDelayDuration={0}
        side={"bottom"}
        sideOffset={2}
        avoidCollisions={false}
      >
        <DropdownMenuTrigger asChild>
          <ShareButtonWrapper>
            <ShareButtonContainer>
              <ShareButtonOverlay>
                <Icons.share />
              </ShareButtonOverlay>
            </ShareButtonContainer>
          </ShareButtonWrapper>
        </DropdownMenuTrigger>
      </Hint>

      <DropdownMenuContent side={"top"} sideOffset={8} align={"end"}>
        <ShareTitle>Share via</ShareTitle>

        <ShareContentContainer>
          {SHARE_LINK.map(({ name, slug, className, icon, link }, index) => {
            const Icon = Icons[icon]

            return (
              <SocialButtonWrapper key={index}>
                <Hint
                  delayDuration={0}
                  skipDelayDuration={0}
                  hideWhenDetached={true}
                  side={"bottom"}
                  sideOffset={6}
                  avoidCollisions={false}
                  label={name}
                >
                  <SocialButtonContainer>
                    <SocialButtonOverlay>
                      {link && (
                        <SocialLinkWrapper
                          href={link}
                          data-a-target={`${slug}-share-button`}
                          aria-label={`Button to share clip to ${name}`}
                          className={cn(className)}
                        >
                          <div
                            className={cn(
                              styles[`social-button__icon--${slug}`],
                              styles["social-button__icon"]
                            )}
                          >
                            <figure
                              className={styles["social-button__icon-wrapper"]}
                            >
                              <Icon />
                            </figure>
                          </div>
                        </SocialLinkWrapper>
                      )}
                    </SocialButtonOverlay>
                  </SocialButtonContainer>
                </Hint>

                <SocialButtonText>
                  <p>{name}</p>
                </SocialButtonText>
              </SocialButtonWrapper>
            )
          })}
        </ShareContentContainer>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
