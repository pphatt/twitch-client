import type { MainNavItem, MainNavSupportItem, NavItem } from "@/types"

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
      slug: "/director/following",
      items: [],
      auth: true,
    },
    {
      title: "Browse",
      slug: "/directory",
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

export const directorySite: { sites: NavItem[] } = {
  sites: [
    {
      title: "Categories",
      slug: "/directory",
    },
    {
      title: "Live Channels",
      slug: "/directory/all",
    },
  ],
}

export const dashboardSite: { sites: MainNavItem[] } = {
  sites: [
    {
      title: "Home",
      slug: "/home",
      icon: "home",
      auth: true,
    },
    {
      title: "Stream Manager",
      slug: "/stream-manager",
      icon: "stream",
      auth: true,
    },
    {
      title: "Analytics",
      icon: "analytics",
      auth: true,
      items: [
        {
          title: "Overview",
          slug: "/analytics",
          items: [],
        },
        {
          title: "Research",
          slug: "/analytics/research",
          items: [],
        },
        {
          title: "Stream Summary",
          slug: "/analytics/stream-summary",
          items: [],
        },
      ],
    },
    {
      title: "Settings",
      icon: "settings",
      auth: true,
      items: [
        {
          title: "Stream",
          slug: "/settings/stream",
          items: [],
        },
        {
          title: "Channel",
          slug: "/settings/channel",
          items: [],
        },
      ],
    },
  ],
}
