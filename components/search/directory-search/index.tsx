"use client"

import * as React from "react"
import { useSearchParams } from "next/navigation"

import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Icons } from "@/components/icons"
import {
  Check,
  DropdownItem,
  DropdownItemLink,
  DropdownMenuContentWrapper as DropdownMenuContent,
  DropdownMenuItem,
  DropdownSVG,
  SearchWrapper,
  SortByDropdown,
  SortByText,
  SortByTrigger,
  SortByTriggerIconWrapper,
  SortByTriggerWrapper,
  SortByWrapper,
  TagsFilterDropdownWrapper,
} from "@/components/search/directory-search/style"
import { SearchTags } from "@/components/search/search-tags"

interface DirectorySearchProps {
  slug: string
}

export function DirectorySearch({ slug }: DirectorySearchProps) {
  const searchParams = useSearchParams()

  const sort = searchParams.get("sort")

  return (
    <SearchWrapper>
      {/* <LanguageSortOptions /> */}

      <TagsFilterDropdownWrapper>
        <SearchTags slug={slug} />

        <SortByWrapper>
          <SortByText>Sort By</SortByText>

          <SortByDropdown>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SortByTrigger>
                  <SortByTriggerWrapper>
                    <div>
                      {sort === "RELEVANCE"
                        ? "Recommended For You"
                        : "Viewers (High to Low)"}
                    </div>

                    <SortByTriggerIconWrapper>
                      <Icons.arrowDown />
                    </SortByTriggerIconWrapper>
                  </SortByTriggerWrapper>
                </SortByTrigger>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                avoidCollisions={false}
                side={"bottom"}
                align={"end"}
              >
                <DropdownMenuItem $currentSelected={sort === "RELEVANCE"}>
                  <DropdownItemLink href={`${slug}?sort=RELEVANCE`}>
                    <DropdownItem>
                      <DropdownSVG>
                        <Icons.starBling />
                      </DropdownSVG>

                      <div>
                        <span>Recommended For You</span>
                      </div>

                      {sort === "RELEVANCE" && (
                        <Check>
                          <Icons.check />
                        </Check>
                      )}
                    </DropdownItem>
                  </DropdownItemLink>
                </DropdownMenuItem>

                <DropdownMenuItem $currentSelected={sort === "VIEWER_COUNT"}>
                  <DropdownItemLink href={`${slug}?sort=VIEWER_COUNT`}>
                    <DropdownItem>
                      <DropdownSVG>
                        <Icons.arrowDownWideNarrow />
                      </DropdownSVG>

                      <div>
                        <span>Viewers (High to Low)</span>
                      </div>

                      {sort === "VIEWER_COUNT" && (
                        <Check>
                          <Icons.check />
                        </Check>
                      )}
                    </DropdownItem>
                  </DropdownItemLink>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SortByDropdown>
        </SortByWrapper>
      </TagsFilterDropdownWrapper>
    </SearchWrapper>
  )
}
