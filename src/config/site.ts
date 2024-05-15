import type { MainNavItem } from "@/types"

export type SiteConfig = typeof siteConfig

const links = {
  twitter: "",
}

export const siteConfig = {
  name: "Twitch Clone",
  description: "Livestream app",
  url: "",
  image: "",
  mainNav: [
    {
      title: "Following",
      href: "/director/following",
      items: [],
      auth: true
    },
    {
      title: "Browse",
      href: "/director",
      items: [],
    },
  ] as MainNavItem[],
  links,
}
