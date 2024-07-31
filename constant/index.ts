import type { MosaicNode } from "react-mosaic-component"

import { Icons } from "@/components/icons"

export const DEFAULT_LAYOUT: MosaicNode<string> = {
  direction: "row",
  first: {
    direction: "column",
    first: "Stream Preview",
    second: "Quick Action",
    splitPercentage: 70,
  },
  second: {
    direction: "row",
    first: "Activity Feed",
    second: "My Chat",
    splitPercentage: 50,
  },
}

interface ShareLinkInterface {
  name: string
  slug: string
  className: string
  color: string
  icon: keyof typeof Icons
  link?: string
}

export const SHARE_LINK: ShareLinkInterface[] = [
  {
    name: "Reddit",
    slug: "reddit",
    className: "social-button__link--reddit",
    icon: "reddit",
    color: "#ff4500",
    link: "/",
  },
  {
    name: "Reddit",
    slug: "reddit",
    className: "social-button__link--reddit",
    icon: "reddit",
    color: "#ff4500",
    link: "/",
  },
  // {
  //   name: "Copy URL",
  //   slug: "copy-link",
  //   className: "",
  //   color: "",
  // },
]
