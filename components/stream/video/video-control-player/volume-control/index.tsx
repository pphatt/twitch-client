import * as React from "react"

import { useLocalStorage } from "@/hooks/use-local-storage"
import { Hint } from "@/components/common/hint"
import { Icons } from "@/components/icons"
import {
  ButtonDiv,
  ShareButton,
  SVGContainer,
  SVGWrapper,
} from "@/components/stream/video/video-control-player/share-style"

interface VolumeControlProps {
  onActive: boolean
  containerRef: HTMLDivElement | null
  videoRef: HTMLVideoElement | null
}

export default function VolumeControl({
  onActive,
  containerRef,
  videoRef,
}: VolumeControlProps) {
  const [isVideoMuted, setIsVideoMuted] = useLocalStorage<{
    default: boolean
  } | null>({
    key: "video-muted",
  })

  React.useEffect(() => {
    const localStorageValue = window["localStorage"].getItem("video-muted")

    let parsedValue: { default: boolean } = { default: false }

    if (
      localStorageValue &&
      localStorageValue !== "null" &&
      localStorageValue !== "undefined"
    ) {
      parsedValue = JSON.parse(localStorageValue) as { default: boolean }
    }

    setIsVideoMuted(parsedValue)
  }, [])

  React.useEffect(() => {
    onRequestMuted(isVideoMuted?.default)
  }, [isVideoMuted?.default])

  const onRequestMuted = React.useCallback(
    (isVideoMuted: boolean) => {
      if (!videoRef) {
        return
      }

      videoRef.muted = isVideoMuted
      videoRef.volume = isVideoMuted ? 0 : 1
    },
    [videoRef]
  )

  return (
    <Hint
      delayDuration={250}
      skipDelayDuration={0}
      align={"center"}
      sideOffset={5}
      label={isVideoMuted?.default ? "Unmute (m)" : "Mute (m)"}
      disableHoverableContent={true}
      container={containerRef}
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
