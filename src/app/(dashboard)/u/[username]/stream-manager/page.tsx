"use client"

import * as React from "react"
import { useEditLayout, useEditLayoutState } from "@/store/state/dashboard"
import { Mosaic, MosaicWindow, type MosaicNode } from "react-mosaic-component"
import { toast } from "sonner"

import { cn } from "@/lib/utils"
import { useMosaicUpdateLayout } from "@/hooks/use-mosaic-update-layout"
import ToastSuccess from "@/components/custom-toast/toast-success"
import SpinnerLoading from "@/components/loading/spinner-loading"
import styles from "@/styles/dashboard/stream-manager/page.module.scss"
import ActivityFeed from "@/app/(dashboard)/u/[username]/stream-manager/_components/activity-feed"
import AddPanel from "@/app/(dashboard)/u/[username]/stream-manager/_components/add-panel"
import Chat from "@/app/(dashboard)/u/[username]/stream-manager/_components/chat"
import PanelHeader from "@/app/(dashboard)/u/[username]/stream-manager/_components/panel-header"

const TITLE_MAP: { [key: string]: string | React.JSX.Element } = {
  "Stream Preview": "Stream Preview",
  "Quick Action": "Quick Action",
  "Activity Feed": <ActivityFeed />,
  "My Chat": <Chat />,
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

  return (
    <div className="stream-manager--page-view">
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
                <PanelHeader title={id} />
              </span>
            )}
          >
            {TITLE_MAP[id]}
          </MosaicWindow>
        )}
      />

      {isEditing && <AddPanel />}
    </div>
  )
}
