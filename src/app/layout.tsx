import "@/styles/vendors/otp-input.scss"
import "@/styles/vendors/react-mosaic-component.scss"
import "@/styles/vendors/simple-bar.scss"
import "@/styles/vendors/stream-manager.scss"
import "@/styles/vendors/global.scss"

import * as React from "react"
import { cookies } from "next/headers"
import { AuthStoreProvider } from "@/context/auth.context"
import { GlobalStyleProvider } from "@/providers/global-style.provider"
import TanStackProviders from "@/providers/tanstack.provider"
import NextTopLoader from "nextjs-toploader"
import { Toaster } from "sonner"

import { siteConfig } from "@/config/site"
import { Inter } from "@/lib/fonts"
import StyledComponentsRegistry from "@/lib/registry"
import styles from "@/styles/application/root-layout/layout.module.scss"

export const metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  icons: [{ rel: "icon", url: "/favicon.ico" }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const profile = cookies().get("profile")?.value

  return (
    <html lang="en">
      <body className={Inter.className}>
        <StyledComponentsRegistry>
          <GlobalStyleProvider>
            <TanStackProviders>
              <NextTopLoader
                color="hsl(12, 100%, 63%)"
                initialPosition={0.08}
                crawlSpeed={200}
                height={3}
                crawl={true}
                showSpinner={true}
                easing="ease"
                speed={200}
                shadow="0 0 10px hsl(12, 100%, 63%), 0 0 5px hsl(12, 100%, 63%)"
              />

              <Toaster
                position="top-center"
                richColors
                visibleToasts={1}
                expand={false}
              />

              <div className={styles["root"]}>
                <div className={styles["root-layout-wrapper"]}>
                  <div className={styles["root-layout-container"]}>
                    <AuthStoreProvider profileFromCookie={profile}>
                      {children}
                    </AuthStoreProvider>
                  </div>
                </div>
              </div>
            </TanStackProviders>
          </GlobalStyleProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
