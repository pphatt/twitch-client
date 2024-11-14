"use client"

import * as React from "react"

import { type InputProps } from "@/components/ui/input"
import {
  InputWrapper as Input,
  Layout,
  ShowPasswordButton,
} from "@/components/forms/auth/password-input/style"
import { Icons } from "@/components/icons"

const PasswordInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false)

    return (
      <Layout>
        <Input
          type={showPassword ? "text" : "password"}
          className={className}
          ref={ref}
          {...props}
        />

        <ShowPasswordButton
          type="button"
          $variant="ghost"
          $size="small"
          onClick={() => setShowPassword((prev) => !prev)}
          disabled={props.value === ""}
        >
          {showPassword ? (
            <Icons.hide aria-hidden="true" />
          ) : (
            <Icons.view aria-hidden="true" />
          )}
          <span>{showPassword ? "Hide password" : "Show password"}</span>
        </ShowPasswordButton>
      </Layout>
    )
  }
)
PasswordInput.displayName = "PasswordInput"

export { PasswordInput }
