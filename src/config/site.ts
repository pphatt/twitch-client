import type { MainNavItem, MainNavSupportItem } from "@/types"

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
      auth: true,
    },
    {
      title: "Browse",
      href: "/director",
      items: [],
    },
  ] as MainNavItem[],
  links,
}

export const supportSite: MainNavSupportItem = {
  sites: [
    {
      title: "General",
      items: [
        {
          title: "About",
          href: "/about",
        },
        {
          title: "Advertisers",
          href: "/advertisers",
        },
        {
          title: "Blog",
          href: "/blog",
        },
        {
          title: "Download Apps",
          href: "/download-apps",
        },
      ],
    },
    {
      title: "HELP & LEGAL",
      items: [
        {
          title: "Community Guidelines",
          href: "/community-guidelines",
        },
        {
          title: "Cookie Policy",
          href: "/cookie-policy",
        },
        {
          title: "Help",
          href: "/help",
        },
        {
          title: "Privacy Policy",
          href: "/privacy-policy",
        },
        {
          title: "Privacy Center",
          href: "/privacy-center",
        },
        {
          title: "Safety Center",
          href: "/safety-center",
        },
        {
          title: "Security",
          href: "/security",
        },
        {
          title: "Terms",
          href: "/terms",
        },
      ],
    },
  ],
}
