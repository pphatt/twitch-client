import * as React from "react"
import {
  useConnectionState,
  useRemoteParticipant,
  useTracks,
} from "@livekit/components-react"
import { ConnectionState, Track } from "livekit-client"

import VideoPlayerLoading from "@/components/stream/video/video-player-loading"
import VideoPlayerOffline from "@/components/stream/video/video-player-offline"
import VideoPreviewPlayer from "@/components/stream/video/video-preview-player"

interface VideoWrapperProps {
  hostIdentity: string
}

export default function VideoWrapper({ hostIdentity }: VideoWrapperProps) {
  const connectionState = useConnectionState()
  const participant = useRemoteParticipant(hostIdentity)
  const tracks = useTracks([
    Track.Source.Camera,
    Track.Source.Microphone,
  ]).filter((track) => track.participant.identity === hostIdentity)

  let content

  if (
    !participant &&
    (connectionState === ConnectionState.Disconnected ||
      connectionState === ConnectionState.Connected)
  ) {
    content = <VideoPlayerOffline />
  } else if (
    !participant ||
    tracks.length === 0 ||
    connectionState === ConnectionState.Connecting ||
    connectionState === ConnectionState.Reconnecting
  ) {
    content = <VideoPlayerLoading />
  } else {
    content = <VideoPreviewPlayer isOffline={false} participant={participant} />
  }

  return <>{content}</>
}
