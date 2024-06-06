"use client"

import * as React from "react"
import { Mosaic, MosaicWindow } from "react-mosaic-component"

import styles from "@/styles/dashboard/stream-manager/page.module.scss"
import PanelHeader from "@/app/(dashboard)/u/[username]/stream-manager/_components/panel-header"

const TITLE_MAP = {
  "Stream Preview": "Stream Preview",
  "Quick Action": "Quick Action",
  "Activity Feed": "Activity Feed",
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
                <PanelHeader>{TITLE_MAP[id]}</PanelHeader>
              </span>
            )}
          >
            <h1>{TITLE_MAP[id]}</h1>
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
