import * as React from "react"

import { useMuteHooks } from "@/hooks/useMute.hooks"
import { useVolumeHooks } from "@/hooks/useVolume.hooks"
import VolumeControl from "@/components/stream/video/video-control-player/volume-control"
import { VolumeControlGroupWrapper } from "@/components/stream/video/video-control-player/volume-control-group/style"
import VolumeControlSlider from "@/components/stream/video/video-control-player/volume-control-slider"
import type { PlayerControlProps } from "@/components/stream/video/video-overlay"

interface VolumeControlGroupProps extends PlayerControlProps {}

export default function VolumeControlGroup({
  onActive,
  containerRef,
  videoRef,
}: VolumeControlGroupProps) {
  const [isHovered, setIsHovered] = React.useState(false)

  const { isVideoMuted, setIsVideoMuted } = useMuteHooks()
  const { volume, setVolume } = useVolumeHooks()

  return (
    <VolumeControlGroupWrapper
      onMouseMove={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <VolumeControl
        onActive={onActive}
        containerRef={containerRef}
        videoRef={videoRef}
        isVideoMuted={isVideoMuted}
        setIsVideoMuted={setIsVideoMuted}
        volume={volume}
        setVolume={setVolume}
      />

      <VolumeControlSlider
        isHovered={isHovered}
        containerRef={containerRef}
        videoRef={videoRef}
        volume={volume}
        setVolume={setVolume}
        isVideoMuted={isVideoMuted}
        setIsVideoMuted={setIsVideoMuted}
      />
    </VolumeControlGroupWrapper>
  )
}
