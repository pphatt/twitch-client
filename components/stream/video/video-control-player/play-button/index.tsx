import * as React from "react"
import { useVideoPlayControl } from "@/store/state/video"

import { Hint } from "@/components/common/hint"
import { Icons } from "@/components/icons"
import {
  ButtonContainer,
  ButtonDiv,
  ButtonOverlay,
  ButtonPlaceholder,
  ButtonSVG,
  ButtonWrapper,
  ShareButton,
} from "@/components/stream/video/video-control-player/share-style"
import type { PlayerControlProps } from "@/components/stream/video/video-overlay"

interface PlayButtonProps extends PlayerControlProps {}

export default function PlayButton({
  onActive,
  containerRef,
  videoRef,
}: PlayButtonProps) {
  const { isPlaying, setIsPlaying } = useVideoPlayControl()

  const onRequestPlay = () => {
    if (!videoRef) {
      return
    }

    if (isPlaying) {
      void videoRef.pause()
      setIsPlaying(false)
    } else {
      void videoRef.play()
      setIsPlaying(true)
    }
  }

  return (
    <Hint
      delayDuration={250}
      skipDelayDuration={0}
      align={"start"}
      sideOffset={5}
      label={!isPlaying ? "Play (space/k)" : "Pause (space/k)"}
      disableHoverableContent={true}
      container={containerRef}
      forceVisible={onActive}
      keepAlive={true}
    >
      <ButtonDiv onClick={onRequestPlay}>
        <ShareButton aria-label="Pause (space/k)">
          <ButtonWrapper>
            <ButtonContainer>
              <ButtonOverlay>
                <ButtonPlaceholder />

                <ButtonSVG
                  as={!isPlaying ? Icons.playVideo : Icons.pauseVideo}
                />
              </ButtonOverlay>
            </ButtonContainer>
          </ButtonWrapper>
        </ShareButton>
      </ButtonDiv>
    </Hint>
  )
}
