"use client"

import * as React from "react"
import { DEFAULT_LAYOUT } from "@/constant"
import {
  useEditLayout,
  useEditLayoutState,
  useTempNodeLayout,
} from "@/store/state/dashboard"
import isEqual from "lodash/isEqual"
import type { MosaicNode } from "react-mosaic-component"
import { toast } from "sonner"

import { useLocalStorage } from "@/hooks/use-local-storage"
import { useMosaicUpdateLayout } from "@/hooks/use-mosaic-update-layout"
import { Button } from "@/components/ui/button/button"
import ToastSuccess from "@/components/custom-toast/toast-success"
import styles from "@/styles/components/layouts/dashboard/dashboard-save-change.module.scss"

export default function DashboardSaveChange() {
  const { isEditing, setIsEditing } = useEditLayout()

  const [lcLayout, setLcLayout] = useLocalStorage<MosaicNode<string> | null>({
    key: "stream-manager-drag-and-drop-layout",
  })

  const { setLayout, debounceUpdateLayout } = useMosaicUpdateLayout()

  const { tempNodeLayout } = useTempNodeLayout()

  const { editLayout } = useEditLayoutState()

  /*
   * this useEffect does as cache local storage data when editing the ui
   * this only cache when user starts editing
   * */
  React.useEffect(() => {
    const localStorageValue = window["localStorage"].getItem(
      "stream-manager-drag-and-drop-layout"
    )

    let parsedValue: MosaicNode<string> = DEFAULT_LAYOUT

    if (localStorageValue) {
      parsedValue = JSON.parse(localStorageValue) as MosaicNode<string>
    }

    setLcLayout(parsedValue)
  }, [isEditing])

  /*
   * check does the ui change or not
   * */
  const isChangesHappened = React.useMemo(
    () => isEqual(tempNodeLayout, editLayout),
    [tempNodeLayout, editLayout]
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
