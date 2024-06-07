"use client"

import * as React from "react"
import {
  MosaicContext,
  MosaicWindowContext,
  type MosaicRootActions,
} from "react-mosaic-component"
import type { MosaicKey } from "react-mosaic-component/lib/types"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import styles from "@/styles/dashboard/stream-manager/_components/panel-header.module.scss"

interface PanelHeaderProps extends React.ComponentPropsWithoutRef<"div"> {}

export default function PanelHeader({ children, ...props }: PanelHeaderProps) {
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
        <h2 className={styles["panel-header-text"]}>{children}</h2>
      </div>

      <div className={styles["panel-header-control"]}>
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
      </div>
    </div>
  )
}
