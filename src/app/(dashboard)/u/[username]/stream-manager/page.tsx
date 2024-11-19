"use client"

import * as React from "react"
import { useAuth } from "@/context/auth.context"
import {
  useEditLayout,
  useEditLayoutState,
} from "@/store/state/dashboard.state"
import { cn } from "@/utils/common"
import { LiveKitRoom } from "@livekit/components-react"
import { Mosaic, MosaicWindow, type MosaicNode } from "react-mosaic-component"
import { toast } from "sonner"

import { useMosaicUpdateLayout } from "@/hooks/useMosaicUpdateLayout.hooks"
import { useViewerToken } from "@/hooks/useViewerToken.hooks"
import ToastSuccess from "@/components/custom-toast/toast-success"
import SpinnerLoading from "@/components/loading/spinner-loading"
import AddPanel from "@/components/stream-manager/add-panel"
import PanelHeader from "@/components/stream-manager/panel-header"
import ActivityFeed from "@/components/stream-manager/panel/activity-feed"
import QuickActionPanel from "@/components/stream-manager/panel/quick-action-panel"
import Chat from "@/components/stream/chat/chat-layout"
import VideoWrapper from "@/components/stream/video/video-wrapper"
import styles from "@/styles/application/dashboard/stream-manager/page.module.scss"

const TITLE_MAP: { [key: string]: string | React.JSX.Element } = {
  "Stream Preview": <></>,
  "Quick Action": <QuickActionPanel />,
  "Activity Feed": <ActivityFeed />,
  "My Chat": <></>,
  new: "New Window",
}

/*
 * There are 3 nodes for managing react-mosaic state
 *
 * LAYOUT_NODE (layout): this node is from local storage
 * EDITING_NODE (useEditLayout): this node is for when react-mosaic container change, this state will update to date
 * TEMP_NODE (useTempNodeLayout): this node is hold the LAYOUT_NODE original data when user start editing
 *
 * explain the architecture behind react-mosaic:
 *
 * first load it will use the LAYOUT_NODE as the default layout
 *
 * when user change the layout without editing, it would update the LAYOUT_NODE direct to the local storage
 *
 * when user change the layout via edit, some notes for this:
 * - first it will set the TEMP_NODE as LAYOUT_NODE (TEMP_NODE = LAYOUT_NODE)
 * - it will update the EDITING_NODE as LAYOUT_NODE (EDITING_NODE = LAYOUT_NODE)
 * - when the ui change, it updates both EDITING_NODE and LAYOUT_NODE.
 * - this is where thing get tricky, SOMEHOW, the react-mosaic only updates when update the LAYOUT_NODE, so when editing we have to update the LAYOUT_NODE too.
 *
 * - one downside of this is that when user edits and refresh the page, it will keep the new change layout
 * */
export default function StreamManagerPage() {
  const { isEditing } = useEditLayout()

  const { layout, debounceUpdateLayout } = useMosaicUpdateLayout()

  const { setEditLayout } = useEditLayoutState()

  /*
   * this controls the mosaic root onChange action
   *
   * when not in the editing state it updates both current layout and the local storage layout
   * when it in the editing state it updates the editing layout
   * */
  const onLayoutChange = React.useCallback(
    (layout: MosaicNode<string> | null) => {
      if (!isEditing) {
        debounceUpdateLayout(layout, () => {
          toast.custom(() => <ToastSuccess>Layout 1 updated</ToastSuccess>)
        })

        return
      }

      setEditLayout(layout)
    },
    [debounceUpdateLayout, isEditing, setEditLayout]
  )

  const { profile } = useAuth()

  const { token, name, color } = useViewerToken(profile!.id)

  return (
    <LiveKitRoom
      options={{
        publishDefaults: {
          videoCodec: "av1",
        },
      }}
      token={token}
      serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_WS_URL}
      className="stream-manager--page-view"
    >
      <Mosaic
        initialValue={layout}
        onChange={onLayoutChange}
        zeroStateView={<SpinnerLoading />}
        className={cn(styles["test"], {
          ["sm-mosaic--editing"]: isEditing,
        })}
        renderTile={(id, path) => (
          <MosaicWindow
            path={path}
            createNode={() => "new"}
            title={""}
            renderToolbar={() => (
              <span
                style={{
                  height: "100%",
                  width: "100%",
                  pointerEvents: "all",
                }}
              >
                <PanelHeader username={name} title={id} />
              </span>
            )}
          >
            {id === "Stream Preview" && (
              <VideoWrapper hostIdentity={profile!.id} />
            )}

            {id === "My Chat" && (
              <Chat
                username={name}
                hostIdentity={profile!.id}
                color={color}
                isCreator={true}
              />
            )}

            {TITLE_MAP[id]}
          </MosaicWindow>
        )}
      />

      {isEditing && <AddPanel />}
    </LiveKitRoom>
  )
}
