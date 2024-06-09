"use client"

import * as React from "react"
import { useEditLayout, useEditLayoutState } from "@/store/state/dashboard"
import { Mosaic, MosaicWindow } from "react-mosaic-component"
import { toast } from "sonner"

import { cn } from "@/lib/utils"
import { useMosaicUpdateLayout } from "@/hooks/use-mosaic-update-layout"
import ToastSuccess from "@/components/custom-toast/toast-success"
import SpinnerLoading from "@/components/loading/spinner-loading"
import styles from "@/styles/dashboard/stream-manager/page.module.scss"
import ActivityFeed from "@/app/(dashboard)/u/[username]/stream-manager/_components/activity-feed"
import AddPanel from "@/app/(dashboard)/u/[username]/stream-manager/_components/add-panel"
import PanelHeader from "@/app/(dashboard)/u/[username]/stream-manager/_components/panel-header"
import {DEFAULT_LAYOUT} from "@/constant";

const TITLE_MAP: { [key: string]: string | React.JSX.Element } = {
  "Stream Preview": "Stream Preview",
  "Quick Action": "Quick Action",
  "Activity Feed": <ActivityFeed />,
  "My Chat": "My Chat",
  new: "New Window",
}

export default function StreamManagerPage() {
  const { isEditing } = useEditLayout()

  const { layout, debounceUpdateLayout } = useMosaicUpdateLayout()

  const { setEditLayout } = useEditLayoutState()

  return (
    <div className="stream-manager--page-view">
      <Mosaic
        initialValue={layout}
        value={layout}
        onChange={(layout) => {
          if (!isEditing) {
            debounceUpdateLayout(layout, () => {
              toast.custom(() => <ToastSuccess>Layout 1 updated</ToastSuccess>)
            })
          } else {
            setEditLayout(layout)
          }
        }}
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
