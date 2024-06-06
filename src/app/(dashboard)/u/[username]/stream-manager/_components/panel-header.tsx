"use client"

import * as React from "react"
import type { MosaicKey } from "react-mosaic-component/lib/types"
import { type MosaicButtonProps } from "react-mosaic-component/src/buttons/MosaicButton"
import {
  MosaicContext,
  MosaicWindowContext,
  type MosaicRootActions,
} from "react-mosaic-component"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import styles from "@/styles/dashboard/stream-manager/_components/panel-header.module.scss"

interface PanelHeaderProps extends React.ComponentPropsWithoutRef<"span"> {}

export default function PanelHeader({ children }: PanelHeaderProps) {
  return (
    <div className={styles["panel-header-wrapper"]}>
      <div className={styles["panel-header-text-wrapper"]}>
        <h2 className={styles["panel-header-text"]}>{children}</h2>
      </div>

      <div className={styles["panel-header-control"]}>
        <div className={styles["panel-header-close"]}>
          <RemoveButton />
        </div>
      </div>
    </div>
  )
}

export class RemoveButton extends React.PureComponent<MosaicButtonProps> {
  static contextType = MosaicWindowContext
  declare context: MosaicWindowContext

  render() {
    return (
      <MosaicContext.Consumer>
        {({ mosaicActions }) => (
          <Button
            className={styles["close-btn"]}
            onClick={this.createRemove(mosaicActions)}
          >
            <div className={styles["close-btn-wrapper"]}>
              <div className={styles["close-btn-container"]}>
                <Icons.closePanel />
              </div>
            </div>
          </Button>
        )}
      </MosaicContext.Consumer>
    )
  }

  private createRemove(mosaicActions: MosaicRootActions<MosaicKey>) {
    return () => {
      mosaicActions.remove(this.context.mosaicWindowActions.getPath())

      if (this.props.onClick) {
        this.props.onClick()
      }
    }
  }
}
