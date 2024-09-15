import * as React from "react"

import { Hint } from "@/components/common/hint"
import {
  SliderPrimitiveRange,
  SliderPrimitiveRoot,
  SliderPrimitiveThumb,
  SliderPrimitiveTrack,
  VolumeControlSliderWrapper,
} from "@/components/stream/video/video-control-player/volume-control-slider/style"
import { TransitionOverlay } from "@/components/stream/video/video-overlay"

interface VolumeControlSliderProps {
  isHovered: boolean
  containerRef: React.RefObject<HTMLDivElement>
  videoRef: React.RefObject<HTMLVideoElement>

  volume: number
  setVolume: (state: number) => void

  isVideoMuted: { default: boolean } | null
  setIsVideoMuted: (state: { default: boolean }) => void
}

export default function VolumeControlSlider({
  isHovered,
  containerRef,
  videoRef,
  volume,
  setVolume,
  isVideoMuted,
  setIsVideoMuted,
}: VolumeControlSliderProps) {
  const handleVolumeChange = (value: number[]) => {
    if (!videoRef.current) {
      return
    }

    const newVolumeValue = Math.round((value[0] as number) * 100) / 100

    // when volume is modified, stream is not muted
    if (isVideoMuted) {
      setIsVideoMuted({ default: false })
    }

    // when volume is set to 0, set stream is muted
    if (newVolumeValue === 0) {
      setIsVideoMuted({ default: true })
    }

    setVolume(newVolumeValue)
    videoRef.current.volume = newVolumeValue
  }

  return (
    <TransitionOverlay
      onActive={isHovered}
      aria-hidden={!isHovered}
      className="volume-slider__slider-container"
    >
      <VolumeControlSliderWrapper>
        <SliderPrimitiveRoot
          value={[isVideoMuted?.default ? 0 : volume]}
          onValueChange={handleVolumeChange}
          max={1}
          min={0}
          step={0.01}
        >
          <SliderPrimitiveTrack>
            <SliderPrimitiveRange />
          </SliderPrimitiveTrack>

          <Hint
            delayDuration={250}
            skipDelayDuration={0}
            align={"center"}
            sideOffset={5}
            label={`${Math.round(volume * 100)}%`}
            disableHoverableContent={true}
            container={containerRef.current}
            keepAlive={true}
          >
            <SliderPrimitiveThumb aria-label="Volume" />
          </Hint>
        </SliderPrimitiveRoot>
      </VolumeControlSliderWrapper>
    </TransitionOverlay>
  )
}
