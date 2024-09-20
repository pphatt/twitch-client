"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

import { cn, sleep } from "@/lib/utils"
import { useDebounce } from "@/hooks/useDebounce"
import { CommandGroup } from "@/components/ui/command"
import {
  CommandWrapper as Command,
  CommandInputWrapper as CommandInput,
  CommandItemWrapper as CommandItem,
  CommandListWrapper as CommandList,
  SearchCategoriesTags,
} from "@/components/search/search-tags/style"
import styles from "@/components/search/search-tags/style.module.scss"

interface SearchTagsProps {
  slug: string
}

export function SearchTags({ slug }: SearchTagsProps) {
  const router = useRouter()

  const [focus, setFocus] = React.useState(false)

  const [query, setQuery] = React.useState("")
  const debouncedQuery = useDebounce(query, 300)
  const [data, setData] = React.useState<null>(null)
  const [isPending, startTransition] = React.useTransition()

  React.useEffect(() => {
    if (debouncedQuery.length <= 0) {
      setData(null)
      return
    }

    async function fetchData() {
      try {
        setData(null)
        await sleep(500)
        console.log(data)
        console.log(isPending)
        console.log(slug)
        console.log(router)
      } catch (err) {
        throw new Error("Something went wrong...")
      }
    }

    startTransition(fetchData)

    return () => setData(null)
  }, [debouncedQuery])

  return (
    <SearchCategoriesTags>
      <Command
        shouldFilter={false}
        className={cn({
          [`${styles["on-focus"]}`]: focus,
        })}
      >
        <CommandInput
          value={query}
          onFocus={() => setFocus(!focus)}
          onBlur={() => setFocus(!focus)}
          onValueChange={(query) => {
            setQuery(query)
          }}
          placeholder="Search Categories Tags"
        />

        {focus && (
          <CommandList>
            <CommandGroup>
              {["FPS", "Shooter", "Anime", "Vtuber"].map((name, index) => {
                return (
                  <CommandItem
                    key={index}
                    // value={manga.slug}
                    onSelect={(name) => setQuery(name)}
                  >
                    <Link href={"/"}>{name}</Link>
                  </CommandItem>
                )
              })}
            </CommandGroup>
          </CommandList>
        )}
      </Command>
    </SearchCategoriesTags>
  )
}
