import * as React from "react"

import { Button } from "@/components/ui/button/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu/dropdown-menu"
import { Icons } from "@/components/icons"
import styles from "@/styles/components/stream/information/report-btn.module.scss"

export default function ReportBtn() {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button className={styles["report-btn-wrapper"]}>
          <div className={styles["report-btn-container"]}>
            <div className={styles["report-btn-overlay"]}>
              <Icons.threeDotVertical />
            </div>
          </div>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        side={"bottom"}
        align={"end"}
        className={styles["report-content-wrapper"]}
      >
        <div className={styles["report-content-container"]}>
          <div className={styles["report-option-wrapper"]}>
            <Button className={styles["report-option-container"]}>
              <div className={styles["report-option-overlay"]}>
                <div className={styles["report-option"]}>
                  Report Live Stream
                </div>
              </div>
            </Button>

            <Button className={styles["report-option-container"]}>
              <div className={styles["report-option-overlay"]}>
                <div className={styles["report-option"]}>
                  Report Something Else
                </div>
              </div>
            </Button>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
