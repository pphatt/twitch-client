import "@/styles/base/_base.scss"
import "@/styles/base/_fonts.scss"
import "@/styles/base/_helpers.scss"
import "@/styles/theme/_default.scss"
// import "@/styles/vendors/_normalize.scss"
import "@/styles/vendors/react-mosaic-component.scss"

import * as React from "react"
import TanStackProviders from "@/providers/tanstack-provider"
import { Toaster } from "sonner"

import { siteConfig } from "@/config/site"
import { font } from "@/lib/fonts"
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
  return (
    <html lang="en">
      <body className={font.className}>
        <StyledComponentsRegistry>
          <TanStackProviders>
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
          </TanStackProviders>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
