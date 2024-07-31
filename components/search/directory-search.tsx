"use client"

import * as React from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu/dropdown-menu"
import { Icons } from "@/components/icons"
import { SearchTags } from "@/components/search/search-tags"
import styles from "@/styles/components/search/directory-search.module.scss"

interface DirectorySearchProps {
  slug: string
}

export function DirectorySearch({ slug }: DirectorySearchProps) {
  const searchParams = useSearchParams()

  const sort = searchParams.get("sort")

  return (
    <div className={styles["search-wrapper"]}>
      {/* <LanguageSortOptions /> */}

      <div className={styles["tags-filter-dropdown-wrapper"]}>
        <SearchTags slug={slug} />

        <div className={styles["sort-by-wrapper"]}>
          <span className={styles["sort-by-text"]}>Sort By</span>
          <div className={styles["sort-by-dropdown"]}>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className={styles["sort-by-trigger"]}>
                  <div className={styles["sort-by-trigger-wrapper"]}>
                    <div>
                      {sort === "RELEVANCE"
                        ? "Recommended For You"
                        : "Viewers (High to Low)"}
                    </div>
                    <div className={styles["sort-by-trigger-icon-wrapper"]}>
                      <Icons.arrowDown />
                    </div>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                avoidCollisions={false}
                side={"bottom"}
                align={"end"}
                className={styles["dropdown-content"]}
              >
                <div
                  className={cn(styles["dropdown-menu-item"], {
                    [`${styles["current-select"]}`]: sort === "RELEVANCE",
                  })}
                >
                  <Link
                    href={`${slug}?sort=RELEVANCE`}
                    className={styles["dropdown-item-link"]}
                  >
                    <div className={styles["dropdown-item"]}>
                      <div className={styles["dropdown-svg"]}>
                        <Icons.starBling />
                      </div>
                      <div>
                        <span>Recommended For You</span>
                      </div>

                      {sort === "RELEVANCE" && (
                        <div className={styles["check"]}>
                          <Icons.check />
                        </div>
                      )}
                    </div>
                  </Link>
                </div>

                <div
                  className={cn(styles["dropdown-menu-item"], {
                    [`${styles["current-select"]}`]: sort === "VIEWER_COUNT",
                  })}
                >
                  <Link
                    href={`${slug}?sort=VIEWER_COUNT`}
                    className={styles["dropdown-item-link"]}
                  >
                    <div className={styles["dropdown-item"]}>
                      <div className={styles["dropdown-svg"]}>
                        <Icons.arrowDownWideNarrow />
                      </div>
                      <div>
                        <span>Viewers (High to Low)</span>
                      </div>

                      {sort === "VIEWER_COUNT" && (
                        <div className={styles["check"]}>
                          <Icons.check />
                        </div>
                      )}
                    </div>
                  </Link>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  )
}
