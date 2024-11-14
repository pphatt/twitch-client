import * as React from "react"
import { cn } from "@/utils/common"
import { OTPInput, type SlotProps } from "input-otp"

import styles from "@/components/forms/auth/otp-input/style.module.scss"

export default function OtpInput({ ...props }) {
  return (
    <OTPInput
      {...props}
      maxLength={6}
      containerClassName={styles["otp-input-container"]}
      render={({ slots }) => (
        <>
          <div className={styles["inner-otp-input-container"]}>
            {slots.slice(0, 6).map((slot, idx) => (
              <Slot key={idx} {...slot} />
            ))}
          </div>
        </>
      )}
    />
  )
}

// Feel free to copy. Uses @shadcn/ui tailwind colors.
function Slot(props: SlotProps) {
  return (
    <div
      className={cn(styles["slot"], {
        [`${styles["slot-active"]}`]: props.isActive,
      })}
    >
      {props.char !== null && <div>{props.char}</div>}
      {props.hasFakeCaret && <FakeCaret />}
    </div>
  )
}

function FakeCaret() {
  return (
    <div className={styles["fake-caret-wrapper"]}>
      <div className={styles["fake-caret"]} />
    </div>
  )
}
