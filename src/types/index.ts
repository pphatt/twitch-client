import type { Icons } from "@/components/icons"

export interface NavItem {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
  icon?: keyof typeof Icons
  label?: string
  description?: string
  auth?: false
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[]
}

export interface NavItemWithOptionalChildren extends NavItem {
  items?: NavItemWithChildren[]
}

export type SidebarNavItem = NavItemWithChildren

export type MainNavItem = NavItemWithOptionalChildren

export interface SearchParams {
  [key: string]: string | string[] | undefined
}

export interface IUserStateData {
  info: {
    accept_erotic_content: boolean
    accept_gore_content: boolean
    accept_mature_content: boolean
    exclude_mylist_updates: boolean
    show_reading_history: boolean
    reader_mode: "scroll"
    reader_mode_sm: "scroll"
    reader_remove_margin: boolean
    reader_remove_margin_sm: boolean
    filtered_comic_type: string[]
    reader_direction: "right" | "left"
  }
}

export interface HistoryComic {
  comics: {
    slug: string
    title: string
    covers: {
      w: number
      h: number
      b2key: string
    }
  }
  chap: string | number
  vol: string | number | null
  hid: string
  date: Date
}
