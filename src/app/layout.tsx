import "@/styles/vendors/react-mosaic-component.scss"
import "@/styles/vendors/simple-bar.scss"
import "@/styles/vendors/stream-manager.scss"
import "@/styles/vendors/global.scss"

import * as React from "react"
import { AuthProvider } from "@/context/auth.context"
import { GlobalStyleProvider } from "@/providers/global-style.provider"
import TanStackProviders from "@/providers/tanstack.provider"
import { Toaster } from "sonner"

import { siteConfig } from "@/config/site"
import { font } from "@/lib/fonts"
import StyledComponentsRegistry from "@/lib/registry"
import { AxiosInstance } from "@/components/axios-instance"
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
  return (
    <html lang="en">
      <body className={font.className}>
        <AxiosInstance>
          <StyledComponentsRegistry>
            <GlobalStyleProvider>
              <TanStackProviders>
                <AuthProvider>
                  <Toaster
                    position="top-center"
                    richColors
                    visibleToasts={1}
                    expand={false}
                  />

                  <div className={styles["root"]}>
                    <div className={styles["root-layout-wrapper"]}>
                      <div className={styles["root-layout-container"]}>
                        {children}
                      </div>
                    </div>
                  </div>
                </AuthProvider>
              </TanStackProviders>
            </GlobalStyleProvider>
          </StyledComponentsRegistry>
        </AxiosInstance>
      </body>
    </html>
  )
}