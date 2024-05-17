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
