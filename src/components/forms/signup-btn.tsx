import * as React from "react"

import { Button } from "@/components/ui/button"
import styles from "@/styles/components/forms/signup-btn.module.scss"

export default function SignupBtn() {
  return (
    <Button className={styles["sign-up-button"]}>
      <div className={styles["auth-inner-button"]}>
        <div>Sign Up</div>
      </div>
    </Button>
  )
}
