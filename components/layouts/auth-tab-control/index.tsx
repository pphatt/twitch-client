"use client"

import * as React from "react"

import { Tabs } from "@/components/ui/tabs"
import LogInForm from "@/components/forms/login-form"
import SignUpForm from "@/components/forms/signup-form"
import {
  AuthFormLayout,
  FormLayoutContainer,
  FormLayoutWrapper,
  ModalHeaderContainer,
  ModalHeaderWrapper,
  TabControl,
  TabControlWrapper,
} from "@/components/layouts/auth-tab-control/style"

interface AuthTabControlProps {
  currentTab: "log-in" | "sign-up"
}

export default function AuthTabControl({ currentTab }: AuthTabControlProps) {
  return (
    <Tabs defaultValue={currentTab} asChild>
      <AuthFormLayout>
        <ModalHeaderWrapper>
          <ModalHeaderContainer>
            <h2>Twitch Clone</h2>
          </ModalHeaderContainer>
        </ModalHeaderWrapper>

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
            <SignUpForm />
          </FormLayoutContainer>
        </FormLayoutWrapper>
      </AuthFormLayout>
    </Tabs>
  )
}
