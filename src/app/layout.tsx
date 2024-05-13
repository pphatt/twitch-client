import "@/styles/globals.scss";

import { GeistSans } from "geist/font/sans";

export const metadata = {
  title: "Twitch Clone",
  description: "Livestream app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>{children}</body>
    </html>
  );
}
