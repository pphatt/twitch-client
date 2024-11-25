import * as React from "react"
import { cn } from "@/utils/common"

import { Hint } from "@/components/common/hint"
import SpinnerLoading from "@/components/loading/spinner-loading"
import {
  PlayerControls,
  TopBarOverlay,
  TransitionOverlay,
} from "@/components/stream/video/video-overlay"
import { PlayerOverlayBackground } from "@/components/stream/video/video-player/style"
import {
  ShortStreamDescriptionContainer,
  ShortStreamDescriptionOverlay,
  ShortStreamDescriptionWrapper,
  StreamDescriptionCategoryLink,
  StreamDescriptionCategoryWrapper,
  StreamDescriptionImage,
  StreamDescriptionImageContainer,
  StreamDescriptionImageWrapper,
  StreamDescriptionTitle,
  StreamDescriptionTitleContainer,
  StreamDescriptionTitleLayout,
  StreamDescriptionTitleOverlay,
  StreamDescriptionTitleWrapper,
  StreamStatusContainer,
  StreamStatusText,
  StreamStatusWrapper,
  VideoPlayerDefaultPlayer,
  VideoPlayerLayoutContainer,
  VideoPlayerLayoutWrapper,
  VideoPlayerOverlay,
  VideoPreviewPlayerContainer,
  VideoPreviewPlayerWrapper,
  VideoRefWrapper,
} from "@/components/stream/video/video-preview-player/style"

interface VideoPlayerOfflineProps {
  title: string
}

export default function VideoPlayerOffline({ title }: VideoPlayerOfflineProps) {
  const videoRef = React.useRef<HTMLVideoElement>(null)
  const containerRef = React.useRef<HTMLDivElement>(null)

  const [isMouseEntered, setIsMouseEntered] = React.useState<boolean>(false)

  React.useEffect(() => {
    const timeOutVideoOverlayAppear = setTimeout(() => {
      if (isMouseEntered) {
        setIsMouseEntered(false)
      }
    }, 5000)

    return () => clearTimeout(timeOutVideoOverlayAppear)
  }, [isMouseEntered])

  return (
    <VideoPreviewPlayerWrapper>
      <VideoPreviewPlayerContainer>
        <TransitionOverlay
          onActive={true}
          className="stream-manager-video-player-transition"
        >
          <VideoPlayerLayoutWrapper
            data-a-target="video-player"
            className="video-player"
          >
            <VideoPlayerLayoutContainer
              className="video-player__container"
              ref={containerRef}
            >
              {/*<ResizeDetector resizeRef={} setState={} />*/}

              <VideoRefWrapper className="video-ref" data-a-target="video-ref">
                <video
                  ref={videoRef}
                  playsInline
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                  }}
                />

                <VideoPlayerDefaultPlayer className="video-player__default-player">
                  <VideoPlayerOverlay className="video-player__overlay">
                    <div
                      onMouseDown={() => setIsMouseEntered(true)}
                      onMouseMove={() => setIsMouseEntered(true)}
                      className={cn("video-player__default-player", {
                        "video-player__inactive": !isMouseEntered,
                      })}
                    >
                      <div className="video-player__overlay">
                        <TransitionOverlay onActive={isMouseEntered}>
                          <TopBarOverlay isOffline={"true"} />
                        </TransitionOverlay>

                        <TransitionOverlay onActive={isMouseEntered}>
                          <PlayerControls
                            onActive={isMouseEntered}
                            containerRef={containerRef}
                            videoRef={videoRef}
                            isPlaying={false}
                            setIsPlaying={() => {}}
                            isOffline={true}
                          />
                        </TransitionOverlay>
                      </div>
                    </div>
                  </VideoPlayerOverlay>
                </VideoPlayerDefaultPlayer>
              </VideoRefWrapper>
            </VideoPlayerLayoutContainer>
          </VideoPlayerLayoutWrapper>
        </TransitionOverlay>
      </VideoPreviewPlayerContainer>

      <ShortStreamDescriptionWrapper>
        <ShortStreamDescriptionContainer>
          <ShortStreamDescriptionOverlay>
            <StreamDescriptionCategoryWrapper>
              <StreamDescriptionImageWrapper>
                <StreamDescriptionCategoryLink href={""}>
                  <StreamDescriptionImageContainer>
                    <StreamDescriptionImage src={"/category/404-1.jpg"} />
                  </StreamDescriptionImageContainer>
                </StreamDescriptionCategoryLink>
              </StreamDescriptionImageWrapper>

              <StreamDescriptionTitleWrapper>
                <StreamDescriptionTitleContainer>
                  <StreamDescriptionTitleOverlay>
                    <StreamDescriptionTitleLayout>
                      <StreamDescriptionTitle>
                        {title}
                      </StreamDescriptionTitle>
                    </StreamDescriptionTitleLayout>
                  </StreamDescriptionTitleOverlay>
                </StreamDescriptionTitleContainer>
              </StreamDescriptionTitleWrapper>
            </StreamDescriptionCategoryWrapper>

            <StreamStatusWrapper>
              <StreamStatusContainer>
                <Hint
                  label={"Determining Status..."}
                  side={"left"}
                  delayDuration={0}
                >
                  <StreamStatusText>Offline</StreamStatusText>
                </Hint>
              </StreamStatusContainer>
            </StreamStatusWrapper>
          </ShortStreamDescriptionOverlay>
        </ShortStreamDescriptionContainer>
      </ShortStreamDescriptionWrapper>
    </VideoPreviewPlayerWrapper>
  )
}
