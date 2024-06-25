"use client"

import * as React from "react"
import { ALL_AVAILABLE_PANEL } from "@/constant/panel"
import { useEditLayoutState } from "@/store/state/dashboard"
import { For } from "million/react"
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
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Icons } from "@/components/icons"
import styles from "@/styles/dashboard/stream-manager/_components/add-panel.module.scss"

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
              <ScrollArea className={styles["menu-container"]}>
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
                        <For
                          each={ALL_AVAILABLE_PANEL.filter(
                            ({ title }) => !leaves.includes(title)
                          )}
                        >
                          {({ title, description }, index) => (
                            <div
                              className={styles["content-container"]}
                              key={index}
                            >
                              <div className={styles["content-text-wrapper"]}>
                                <div
                                  className={styles["content-text-container"]}
                                >
                                  <div className={styles["content-text"]}>
                                    <p>{title}</p>
                                  </div>

                                  <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                      <TooltipTrigger asChild>
                                        <Button
                                          className={styles["content-btn"]}
                                        >
                                          <div
                                            className={
                                              styles["content-btn-wrapper"]
                                            }
                                          >
                                            <Icons.explainationMark />
                                          </div>
                                        </Button>
                                      </TooltipTrigger>

                                      <TooltipContent
                                        align={"end"}
                                        alignOffset={-10}
                                        className={styles["tooltip-content"]}
                                      >
                                        <p>{description}</p>
                                      </TooltipContent>
                                    </Tooltip>
                                  </TooltipProvider>
                                </div>
                              </div>

                              <div className={styles["add-btn-layout-wrapper"]}>
                                <Button
                                  className={styles["content-btn"]}
                                  onClick={() => addWindowPanel(title)}
                                >
                                  <div
                                    className={styles["content-btn-wrapper"]}
                                  >
                                    <Icons.addPanelPlus />
                                  </div>
                                </Button>
                              </div>
                            </div>
                          )}
                        </For>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollArea>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
