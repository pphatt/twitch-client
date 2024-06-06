import "@/styles/globals.scss"
import "@/styles/react-mosaic-component.scss"

import TanStackProviders from "@/providers/tanstack-provider"
import { GeistSans } from "geist/font/sans"
import { Toaster } from "sonner"

import { siteConfig } from "@/config/site"
import styles from "@/styles/root-layout/layout.module.scss"

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
      <body className={GeistSans.className}>
        <TanStackProviders>
          <div className={styles["root"]}>
            <div className={styles["root-layout-wrapper"]}>
              <div className={styles["root-layout-container"]}>
                {children}
                <Toaster position="top-right" richColors />
              </div>
            </div>
          </div>
        </TanStackProviders>
      </body>
    </html>
  )
}
