"use client"

import * as React from "react"
import {useEditLayout, useEditLayoutState} from "@/store/state/dashboard"
import {
  MosaicContext,
  MosaicWindowContext,
  type MosaicRootActions,
} from "react-mosaic-component"
import type { MosaicKey } from "react-mosaic-component/lib/types"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Icons } from "@/components/icons"
import styles from "@/styles/dashboard/stream-manager/_components/panel-header.module.scss"
import {useMosaicUpdateLayout} from "@/hooks/use-mosaic-update-layout";

interface PanelHeaderProps extends React.ComponentPropsWithoutRef<"div"> {
  title: string
}

export default function PanelHeader({ title, ...props }: PanelHeaderProps) {
  const { isEditing, setIsEditing } = useEditLayout()

  const { layout } = useMosaicUpdateLayout()

  const { setEditLayout } = useEditLayoutState()

  const context = React.useContext(MosaicWindowContext)

  const createRemove = React.useCallback(
    (mosaicActions: MosaicRootActions<MosaicKey>) => {
      return () => mosaicActions.remove(context.mosaicWindowActions.getPath())
    },
    [context.mosaicWindowActions]
  )

  return (
    <div className={styles["panel-header-wrapper"]} {...props}>
      <div className={styles["panel-header-text-wrapper"]}>
        <h2 className={styles["panel-header-text"]}>{title}</h2>
      </div>

      <div className={styles["panel-header-control"]}>
        {isEditing ? (
          <div className={styles["panel-header-close"]}>
            <MosaicContext.Consumer>
              {({ mosaicActions }) => (
                <Button
                  className={styles["close-btn"]}
                  onClick={createRemove(mosaicActions)}
                >
                  <div className={styles["close-btn-wrapper"]}>
                    <div className={styles["close-btn-container"]}>
                      <Icons.closePanel />
                    </div>
                  </div>
                </Button>
              )}
            </MosaicContext.Consumer>
          </div>
        ) : (
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <Button
                aria-label={title}
                className={styles["dropdown-trigger"]}
              >
                <div className={styles["dropdown-trigger-wrapper"]}>
                  <Icons.ellipsisVertical />
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align={"end"}
              sideOffset={-1}
              className={styles["dropdown-content"]}
            >
              <DropdownMenuItem className={styles["dropdown-item"]} asChild>
                <Button>
                  <span>Pop-out {title}</span>
                </Button>
              </DropdownMenuItem>

              <DropdownMenuItem className={styles["dropdown-item"]} asChild>
                <Button
                  disabled={isEditing ?? true}
                  onClick={() => {
                    if (!isEditing) {
                      setEditLayout(layout)
                      setIsEditing(!isEditing)
                    }
                  }}
                >
                  <span>Edit Layout</span>
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </div>
  )
}
