"use client"

import * as React from "react"
import { useEditLayout, useEditLayoutState } from "@/store/state/dashboard"
import isEqual from "lodash/isEqual"
import type { MosaicNode } from "react-mosaic-component"
import { toast } from "sonner"

import { useLocalStorage } from "@/hooks/use-local-storage"
import { useMosaicUpdateLayout } from "@/hooks/use-mosaic-update-layout"
import { Button } from "@/components/ui/button"
import ToastSuccess from "@/components/custom-toast/toast-success"
import styles from "@/styles/components/layouts/dashboard/dashboard-save-change.module.scss"

export default function DashboardSaveChange() {
  const { isEditing, setIsEditing } = useEditLayout()

  const [lcLayout] = useLocalStorage<MosaicNode<string> | null>({
    key: "stream-manager-drag-and-drop-layout",
  })

  const { layout, setLayout, debounceUpdateLayout } = useMosaicUpdateLayout()

  const { editLayout } = useEditLayoutState()

  const isChangesHappened = React.useMemo(
    () => isEqual(layout, editLayout),
    [layout, editLayout]
  )

  if (!isEditing) return null

  return (
    <div className={styles["layout-wrapper"]}>
      <div className={styles["cancel-change-wrapper"]}>
        <Button
          className={styles["cancel-change-btn"]}
          onClick={() => {
            setLayout(lcLayout)
            setIsEditing(!isEditing)
          }}
        >
          <div className={styles["cancel-change-btn-wrapper"]}>
            <div className={styles["cancel-change-btn-container"]}>
              <p className={styles["cancel-change-btn-text"]}>Cancel Changes</p>
            </div>
          </div>
        </Button>
      </div>

      <div className={styles["cancel-change-wrapper"]}>
        <Button
          disabled={isChangesHappened}
          className={styles["cancel-change-btn"]}
          onClick={() => {
            debounceUpdateLayout(editLayout, () => {
              toast.custom(() => <ToastSuccess>Layout 1 updated</ToastSuccess>)
            })
            setIsEditing(!isEditing)
          }}
        >
          <div className={styles["cancel-change-btn-wrapper"]}>
            <div className={styles["cancel-change-btn-container"]}>
              <p className={styles["cancel-change-btn-text"]}>
                Save Layout Changes
              </p>
            </div>
          </div>
        </Button>
      </div>
    </div>
  )
}
