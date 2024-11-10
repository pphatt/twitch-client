"use client"

import * as React from "react"
import { cn } from "@/utils/common"
import { OTPInput, OTPInputContext } from "input-otp"
import { Dot } from "lucide-react"

import styles from "@/components/ui/otp-input/style.module.scss"

const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  React.ComponentPropsWithoutRef<typeof OTPInput>
>(({ className, containerClassName, ...props }, ref) => (
  <OTPInput
    ref={ref}
    containerClassName={cn(styles["otp-input-container"], containerClassName)}
    className={cn(styles["otp-disable"], className)}
    {...props}
  />
))
InputOTP.displayName = "InputOTP"

const InputOTPGroup = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn(styles["otp-group"], className)} {...props} />
))
InputOTPGroup.displayName = "InputOTPGroup"

const InputOTPSlot = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & { index: number }
>(({ index, className, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]

  return (
    <div
      ref={ref}
      className={cn(
        styles["slot"],
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        isActive && styles["slot-active"],
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className={styles["fake-caret-wrapper"]}>
          <div className={styles["fake-caret"]} />
        </div>
      )}
    </div>
  )
})
InputOTPSlot.displayName = "InputOTPSlot"

const InputOTPSeparator = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ ...props }, ref) => (
  <div ref={ref} role="separator" {...props}>
    <Dot />
  </div>
))
InputOTPSeparator.displayName = "InputOTPSeparator"

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
