"use client"

import * as React from "react"
import { ALL_AVAILABLE_PANEL } from "@/constant/panel"
import { useEditLayoutState } from "@/store/state/dashboard"
import {
  Corner,
  getLeaves,
  getNodeAtPath,
  getPathToCorner,
  updateTree,
  type MosaicNode,
} from "react-mosaic-component"

import { cn } from "@/lib/utils"
import { useMosaicUpdateLayout } from "@/hooks/use-mosaic-update-layout"
import { Button } from "@/components/ui/button"
import { Hint } from "@/components/hint"
import { Icons } from "@/components/icons"
import SimpleBar from "@/components/simplebar"
import styles from "@/styles/components/stream-manager/add-panel.module.scss"

export default function AddPanel() {
  const [isHoverOn, setIsHoverOn] = React.useState(false)

  const { editLayout, setEditLayout } = useEditLayoutState()

  const { layout, setLayout } = useMosaicUpdateLayout()

  const leaves = React.useMemo(() => getLeaves(editLayout), [editLayout])

  const addWindowPanel = React.useCallback(
    (id: string) => {
      const path = getPathToCorner(editLayout, Corner.TOP_RIGHT)

      const destination = getNodeAtPath(editLayout, path) as MosaicNode<string>

      const tree = updateTree(editLayout!, [
        {
          path,
          spec: {
            $set: {
              direction: "row",
              first: destination,
              second: id,
            },
          },
        },
      ])

      setLayout(tree)
      setEditLayout(tree)
    },
    [editLayout, layout, setLayout]
  )

  return (
    <div className={"sm-sliding-edit-menu"}>
      <div className={"sm--edit-menu__container"}>
        <div
          onMouseOver={() => setIsHoverOn(true)}
          onMouseLeave={() => setIsHoverOn(false)}
          className={cn("sm--edit-menu", {
            ["sm--edit-menu__full"]: isHoverOn,
            ["sm--edit-menu__condensed"]: !isHoverOn,
          })}
        >
          <div className={"sm--edit-menu__slider"}>
            <div className={styles["menu-layout-wrapper"]}>
              <Icons.addPanelPlus />
            </div>

            <div className={styles["menu-wrapper"]}>
              <SimpleBar
                forceVisible={"y"}
                className={styles["menu-container"]}
                simpleContentWrapperStyle={{
                  padding: "0",
                }}
              >
                <div className={styles["menu-layout"]}>
                  <div className={styles["menu-header-wrapper"]}>
                    <h3>Edit Stream Manager Layout</h3>
                  </div>

                  <div className={styles["menu-content-wrapper"]}>
                    <div className={styles["menu-description-wrapper"]}>
                      <p className={styles["menu-description-text"]}>
                        Add stats and panels by clicking the plus icon.
                      </p>
                    </div>

                    <div className={styles["menu-content-container"]}>
                      <div className={styles["menu-content-header"]}>
                        <p>Panels</p>
                      </div>

                      <div className={styles["content-wrapper"]}>
                        {ALL_AVAILABLE_PANEL.filter(
                          ({ title }) => !leaves.includes(title)
                        ).map(({ title, description }, index) => (
                          <div
                            className={styles["content-container"]}
                            key={index}
                          >
                            <div className={styles["content-text-wrapper"]}>
                              <div className={styles["content-text-container"]}>
                                <div className={styles["content-text"]}>
                                  <p>{title}</p>
                                </div>

                                <Hint
                                  delayDuration={100}
                                  align={"end"}
                                  alignOffset={-10}
                                  label={description}
                                >
                                  <Button className={styles["content-btn"]}>
                                    <div
                                      className={styles["content-btn-wrapper"]}
                                    >
                                      <Icons.explainationMark />
                                    </div>
                                  </Button>
                                </Hint>
                              </div>
                            </div>

                            <div className={styles["add-btn-layout-wrapper"]}>
                              <Button
                                className={styles["content-btn"]}
                                onClick={() => addWindowPanel(title)}
                              >
                                <div className={styles["content-btn-wrapper"]}>
                                  <Icons.addPanelPlus />
                                </div>
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </SimpleBar>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
