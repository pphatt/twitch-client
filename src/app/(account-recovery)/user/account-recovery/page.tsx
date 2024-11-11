"use client"

import * as React from "react"
import ValidateEmailForm from "src/components/forms/validate-email-form"

import AccountRecoveryForm from "@/components/forms/account-recovery-form"

export default function AccountRecoveryPage() {
  const [email, setEmail] = React.useState<string>("")

  if (email) {
    return (
      <AccountRecoveryForm
        email={email}
        setEmail={(value) => setEmail(value)}
      />
    )
  }

  return <ValidateEmailForm setEmail={(value) => setEmail(value)} />
}
