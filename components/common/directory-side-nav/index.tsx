"use client"

import * as React from "react"
import { Suspense } from "react"
import { usePathname } from "next/navigation"

import type { NavItem } from "@/types/common"
import * as Primitive from "@/components/common/directory-side-nav/style"
import { DirectorySearch } from "@/components/search/directory-search"

interface DirectorySideNavProps {
  sites: NavItem[]
}

export default function DirectorySideNav({ sites }: DirectorySideNavProps) {
  const pathname = usePathname()

  return (
    <>
      <Primitive.LayoutHeader>
        <h1>Browse</h1>
      </Primitive.LayoutHeader>

      <Primitive.LayoutSideSection>
        <Primitive.NavigationWrapper>
          <Primitive.NavigationContainer>
            <Primitive.NavigationList>
              {sites.map(({ title, slug }, index) => {
                const currentTab = pathname === slug

                return (
                  <Primitive.ListItem
                    data-selected={currentTab}
                    data-index={currentTab ? 0 : -1}
                    key={index}
                  >
                    <Primitive.ListItemLinkWrapper href={slug!}>
                      <Primitive.ListItemText>{title}</Primitive.ListItemText>
                    </Primitive.ListItemLinkWrapper>

                    <Primitive.ListItemUnderlineWrapper>
                      {currentTab && <Primitive.ListItemUnderline />}
                    </Primitive.ListItemUnderlineWrapper>
                  </Primitive.ListItem>
                )
              })}
            </Primitive.NavigationList>
          </Primitive.NavigationContainer>
        </Primitive.NavigationWrapper>

        <Primitive.OptionWrapper>
          <Primitive.OptionContainer>
            <Suspense>
              <DirectorySearch slug={pathname} />
            </Suspense>

            <Primitive.SortByOptionsWrapper></Primitive.SortByOptionsWrapper>
          </Primitive.OptionContainer>
        </Primitive.OptionWrapper>
      </Primitive.LayoutSideSection>
    </>
  )
}
