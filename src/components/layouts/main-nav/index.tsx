import * as React from "react"
import AnimatedLogo from "@/assets/logo/animated-logo"

import type { MainNavItem, SupportNavItem } from "@/types/common"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  DropdownMenuItemContainer,
  DropdownMenuItemLink,
  DropdownMenuItemTitle,
  DropdownMenuItemWrapper,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu-fork"
import { Icons } from "@/components/icons"
import {
  DropdownMenuContentWrapper as DropdownMenuContent,
  DropdownMenuWrapper,
  HomeLink,
  ItemContainer,
  ItemLink,
  ItemText,
  ItemTextWrapper,
  ItemWrapper,
  MainNavItems,
  MainNavWrapper,
  OptionItems,
  OptionItemsTrigger,
  SVGContainer,
  SVGWrapper,
  Text,
} from "@/components/layouts/main-nav/style"
import SimpleBar from "@/components/simplebar"

interface MainNavProps {
  items: MainNavItem[]
  supportItem: SupportNavItem[]
}

export function MainNav({ items, supportItem }: MainNavProps) {
  return (
    <MainNavWrapper>
      <HomeLink href={"/"}>
        <AnimatedLogo />
      </HomeLink>

      <MainNavItems>
        {items.map(({ title, slug }, index) => (
          <ItemWrapper key={index}>
            <ItemContainer>
              <ItemLink href={`${slug}`}>
                <div>
                  <ItemTextWrapper>
                    <ItemText>
                      <Text>{title}</Text>
                    </ItemText>
                  </ItemTextWrapper>
                </div>
              </ItemLink>
            </ItemContainer>
          </ItemWrapper>
        ))}
      </MainNavItems>

      <OptionItems>
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <OptionItemsTrigger>
              <SVGWrapper>
                <SVGContainer>
                  <Icons.ellipsisVertical />
                </SVGContainer>
              </SVGWrapper>
            </OptionItemsTrigger>
          </DropdownMenuTrigger>

          <DropdownMenuContent align={"start"} asChild>
            <SimpleBar
              forceVisible={"y"}
              simpleContentWrapperStyle={{
                paddingBottom: "0",
              }}
            >
              <DropdownMenuWrapper>
                {supportItem.map(({ title, items }, index) => (
                  <div key={index}>
                    <DropdownMenuLabel>{title}</DropdownMenuLabel>

                    {items.map(({ title, href }, index) => (
                      <DropdownMenuItemWrapper key={index}>
                        <DropdownMenuItemLink href={href}>
                          <DropdownMenuItemContainer>
                            <DropdownMenuItemTitle>
                              {title}
                            </DropdownMenuItemTitle>
                          </DropdownMenuItemContainer>
                        </DropdownMenuItemLink>
                      </DropdownMenuItemWrapper>
                    ))}

                    {index !== supportItem.length - 1 && (
                      <DropdownMenuSeparator />
                    )}
                  </div>
                ))}
              </DropdownMenuWrapper>
            </SimpleBar>
          </DropdownMenuContent>
        </DropdownMenu>
      </OptionItems>
    </MainNavWrapper>
  )
}
