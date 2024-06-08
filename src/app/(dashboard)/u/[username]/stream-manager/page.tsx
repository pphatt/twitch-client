"use client"

import * as React from "react"
import { useEditLayout } from "@/store/state/dashboard"
import { Mosaic, MosaicWindow } from "react-mosaic-component"

import { cn } from "@/lib/utils"
import styles from "@/styles/dashboard/stream-manager/page.module.scss"
import ActivityFeed from "@/app/(dashboard)/u/[username]/stream-manager/_components/activity-feed"
import AddPanel from "@/app/(dashboard)/u/[username]/stream-manager/_components/add-panel"
import PanelHeader from "@/app/(dashboard)/u/[username]/stream-manager/_components/panel-header"

const TITLE_MAP = {
  "Stream Preview": "Stream Preview",
  "Quick Action": "Quick Action",
  "Activity Feed": <ActivityFeed />,
  "My Chat": "My Chat",
  new: "New Window",
}

export default function StreamManagerPage() {
  const { isEditing } = useEditLayout()

  // const [layout, setLayout] = React.useState(() => {
  //   const savedLayout = localStorage.getItem('mosaicLayout');
  //   return savedLayout ? JSON.parse(savedLayout) : null;
  // });
  //
  // React.useEffect(() => {
  //   localStorage.setItem('mosaicLayout', JSON.stringify(layout));
  // }, [layout]);

  return (
    <div className="stream-manager--page-view">
      <Mosaic
        // value={layout}
        onChange={(event) => {
          console.log(event)
        }}
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
        initialValue={{
          direction: "row",
          first: {
            direction: "column",
            first: "Stream Preview",
            second: "Quick Action",
            splitPercentage: 70,
          },
          second: {
            direction: "row",
            first: "Activity Feed",
            second: "My Chat",
          },
        }}
      />

      {isEditing && <AddPanel />}
    </div>
  )
}
