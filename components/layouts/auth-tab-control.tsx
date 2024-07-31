"use client"

import * as React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import LogInForm from "@/components/forms/login-form"
import SignUpForm from "@/components/forms/signup-form"
import styles from "@/styles/components/layouts/auth-tab-control.module.scss"

interface AuthTabControlProps {
  currentTab: "log-in" | "sign-up"
}

export default function AuthTabControl({ currentTab }: AuthTabControlProps) {
  return (
    <Tabs defaultValue={currentTab} asChild>
      <Card className={styles["auth-form-layout"]}>
        <CardHeader className={styles["modal-header-wrapper"]}>
          <CardTitle className={styles["modal-header-container"]}>
            <h2>Twitch Clone</h2>
          </CardTitle>
        </CardHeader>

        <TabsList className={styles["tab-control-wrapper"]}>
          <TabsTrigger value="log-in" className={styles["tab-control"]}>
            Log In
          </TabsTrigger>
          <TabsTrigger value="sign-up" className={styles["tab-control"]}>
            Sign Up
          </TabsTrigger>
        </TabsList>
        <TabsContent value="log-in" className={styles["form-layout-wrapper"]}>
          <CardContent className={styles["form-layout-container"]}>
            <LogInForm />
          </CardContent>
        </TabsContent>
        <TabsContent value="sign-up" className={styles["form-layout-wrapper"]}>
          <CardContent className={styles["form-layout-container"]}>
            <SignUpForm />
          </CardContent>
        </TabsContent>
      </Card>
    </Tabs>
  )
}
