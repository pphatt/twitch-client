"use client"

import * as React from "react"

import { Tabs } from "@/components/ui/tabs"
import LogInForm from "@/components/forms/login-form"
import SignUpForm from "@/components/forms/signup-form"
import {
  FormLayoutContainer,
  FormLayoutWrapper,
  TabControl,
  TabControlWrapper,
} from "@/components/layouts/auth-tab-control/style"
import SimpleBar from "@/components/simplebar"

interface AuthTabControlProps {
  currentTab: "log-in" | "sign-up"
}

export default function AuthTabControl({ currentTab }: AuthTabControlProps) {
  const [tab, setTab] = React.useState<string>(currentTab)

  return (
    <Tabs
      style={{
        display: "flex",
        width: "calc(100% + 0.75rem)",
        height: "100%",
        overflowX: "hidden",
        maxHeight: "100%",
        flexDirection: "column",
      }}
      value={tab}
      onValueChange={(value) => setTab(value)}
    >
      <TabControlWrapper>
        <TabControl value="log-in">Log In</TabControl>
        <TabControl value="sign-up">Sign Up</TabControl>
      </TabControlWrapper>

      <FormLayoutWrapper value="log-in">
        <FormLayoutContainer>
          <LogInForm />
        </FormLayoutContainer>
      </FormLayoutWrapper>

      <FormLayoutWrapper value="sign-up">
        <FormLayoutContainer>
          <SignUpForm redirectToLogin={() => setTab("log-in")} />
        </FormLayoutContainer>
      </FormLayoutWrapper>
    </Tabs>
  )
}
