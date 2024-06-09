import * as React from "react"

import { Icons } from "@/components/icons"
import styles from "@/styles/components/custom-toast/toast-success.module.scss"

interface ToastSuccessProps extends React.ComponentPropsWithoutRef<"div"> {}

export default function ToastSuccess({
  children,
  ...props
}: ToastSuccessProps) {
  return (
    <div {...props} className={styles["toast-success-layout-wrapper"]}>
      <div className={styles["toast-success-layout-container"]}>
        <div className={styles["toast-success-layout-overlay"]}>
          <div className={styles["icon-wrapper"]}>
            <div className={styles["icon-container"]}>
              <div className={styles["icon-overlay"]}>
                <Icons.success />
              </div>
            </div>
          </div>

          <div className={styles["toast-text-wrapper"]}>
            <div className={styles["toast-text-container"]}>
              <p className={styles["toast-text"]}>{children}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
