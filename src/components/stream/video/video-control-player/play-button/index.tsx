import * as React from "react"

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

interface PlayButtonProps extends PlayerControlProps {
  isPlaying: boolean
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>
}

export default function PlayButton({
  onActive,
  containerRef,
  videoRef,
  isPlaying,
  setIsPlaying,
}: PlayButtonProps) {
  const onRequestPlay = () => {
    if (!videoRef.current) {
      return
    }

    if (isPlaying) {
      void videoRef.current.pause()
      setIsPlaying(false)
    } else {
      void videoRef.current.play()
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
      container={containerRef.current}
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
