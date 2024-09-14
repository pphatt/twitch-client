import * as React from "react"

import { Hint } from "@/components/common/hint"
import { Icons } from "@/components/icons"
import {
  ButtonDiv,
  ShareButton,
  SVGContainer,
  SVGWrapper,
} from "@/components/stream/video/video-control-player/share-style"
import type { PlayerControlProps } from "@/components/stream/video/video-overlay"

interface VolumeControlProps extends PlayerControlProps {
  isVideoMuted: {
    default: boolean
  } | null
  setIsVideoMuted: (state: { default: boolean }) => void

  volume: number
  setVolume: (state: number) => void
}

export default function VolumeControl({
  onActive,
  containerRef,
  videoRef,
  isVideoMuted,
  setIsVideoMuted,
  volume,
  setVolume,
}: VolumeControlProps) {
  const onRequestMuted = React.useCallback(
    (isVideoMuted: boolean) => {
      if (!videoRef.current) {
        return
      }

      if (volume === undefined) {
        return
      }

      videoRef.current.muted = isVideoMuted
      videoRef.current.volume = isVideoMuted ? 0 : volume

      // when change the volume by muted
      if (volume === 0 && !isVideoMuted) {
        videoRef.current.volume = 1
        setVolume(1)
      }
    },
    [videoRef, volume]
  )

  // initialize video-muted
  React.useEffect(() => {
    if (isVideoMuted === null) {
      return
    }

    onRequestMuted(isVideoMuted?.default)
  }, [isVideoMuted, isVideoMuted?.default, onRequestMuted])

  return (
    <Hint
      delayDuration={250}
      skipDelayDuration={0}
      align={"center"}
      sideOffset={5}
      label={isVideoMuted?.default ? "Unmute (m)" : "Mute (m)"}
      disableHoverableContent={true}
      container={containerRef.current}
      forceVisible={onActive}
      keepAlive={true}
    >
      <ButtonDiv
        onClick={() => {
          setIsVideoMuted({ default: !isVideoMuted?.default })
          onRequestMuted(!isVideoMuted?.default)
        }}
      >
        <ShareButton>
          <SVGWrapper>
            <SVGContainer>
              {isVideoMuted?.default ? <Icons.mute /> : <Icons.unmute />}
            </SVGContainer>
          </SVGWrapper>
        </ShareButton>
      </ButtonDiv>
    </Hint>
  )
}
