import type { Icons } from "@/components/icons"

export interface NavItem {
  title: string
  slug?: string
  disabled?: boolean
  external?: boolean
  icon?: keyof typeof Icons
  label?: string
  description?: string
  auth?: false
}

export interface SupportNavItem {
  title: string
  items: { title: string; href: string }[]
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[]
}

export interface NavItemWithOptionalChildren extends NavItem {
  items?: NavItemWithChildren[]
}

export type MainNavSupportItem = {
  sites: SupportNavItem[]
}

export type SidebarNavItem = NavItemWithChildren

export type MainNavItem = NavItemWithOptionalChildren

export interface SearchParams {
  [key: string]: string | string[] | undefined
}

export interface IChannelsData {
  channelName: string
  slug: string
  category: string
  isLive: boolean
  view: number
  title: string
  image: string
}

export interface IFollowChannelsData {
  channelName: string
  slug: string
  category?: string
  isLive: boolean
  view?: number
  title?: string
  image: string
}

export interface ICategoryData {
  title: string
  currentTotalView: number
  slug: string
  image: string
  tags: ITag[]
}

export interface IRecommendedLiveChannel {
  channel: {
    name: string
    image: string
    slug: string
  }
  title: string
  slug: string
  totalView: number
  isLive: boolean
  category: string
  livePreviewImage: string
  tags: ITag[]
}

export interface ITag {
  name: string
  slug: string
}
