import * as React from "react"
import { useVideoFullScreen } from "@/store/state/video"

import { useEventListener } from "@/hooks/useEventListener"
import { Hint } from "@/components/common/hint"
import { Icons } from "@/components/icons"
import {
  ButtonDiv,
  ShareButton,
  SVGContainer,
  SVGWrapper,
} from "@/components/stream/video/video-control-player/share-style"

interface FullScreenButtonProps {
  onActive: boolean
  containerRef: React.RefObject<HTMLDivElement>
}

export default function FullscreenButton({
  onActive,
  containerRef,
}: FullScreenButtonProps) {
  const { isFullScreen, setIsFullScreen } = useVideoFullScreen()

  const onRequestFullScreen = () => {
    if (isFullScreen) {
      void document.exitFullscreen()
    } else if (containerRef?.current) {
      void containerRef.current.requestFullscreen()
    }
  }

  const handleFullscreenChange = () => {
    const isCurrentlyFullscreen = document.fullscreenElement !== null
    setIsFullScreen(isCurrentlyFullscreen)
  }

  // addEventListener on the containerRef
  useEventListener("fullscreenchange", handleFullscreenChange, containerRef)

  return (
    <Hint
      delayDuration={250}
      skipDelayDuration={0}
      align={"end"}
      sideOffset={5}
      label={isFullScreen ? "Exit Fullscreen (f)" : "Fullscreen (f)"}
      disableHoverableContent={true}
      container={containerRef.current}
      forceVisible={onActive}
    >
      <ButtonDiv onClick={onRequestFullScreen}>
        <ShareButton>
          <SVGWrapper>
            <SVGContainer>
              {isFullScreen ? <Icons.exitFullscreen /> : <Icons.fullscreen />}
            </SVGContainer>
          </SVGWrapper>
        </ShareButton>
      </ButtonDiv>
    </Hint>
  )
}
