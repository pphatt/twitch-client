"use client"

import * as React from "react"
import { useEditLayout } from "@/store/state/dashboard"

import { Button } from "@/components/ui/button"
import styles from "@/styles/components/layouts/dashboard/dashboard-save-change.module.scss"

export default function DashboardSaveChange() {
  const { isEditing, setIsEditing } = useEditLayout()

  if (!isEditing) return null

  return (
    <div className={styles["layout-wrapper"]}>
      <div className={styles["cancel-change-wrapper"]}>
        <Button
          className={styles["cancel-change-btn"]}
          onClick={() => setIsEditing(!isEditing)}
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
          className={styles["cancel-change-btn"]}
          onClick={() => setIsEditing(!isEditing)}
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
