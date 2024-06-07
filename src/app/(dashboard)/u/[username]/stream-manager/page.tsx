"use client"

import * as React from "react"
import { Mosaic, MosaicWindow } from "react-mosaic-component"

import styles from "@/styles/dashboard/stream-manager/page.module.scss"
import ActivityFeed from "@/app/(dashboard)/u/[username]/stream-manager/_components/activity-feed"
import PanelHeader from "@/app/(dashboard)/u/[username]/stream-manager/_components/panel-header"

const TITLE_MAP = {
  "Stream Preview": "Stream Preview",
  "Quick Action": "Quick Action",
  "Activity Feed": <ActivityFeed />,
  "My Chat": "My Chat",
  new: "New Window",
}

export default function StreamManagerPage() {
  return (
    <div className="stream-manager--page-view">
      <Mosaic
        className={styles["test"]}
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
                <PanelHeader>{id}</PanelHeader>
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
    </div>
  )
}
