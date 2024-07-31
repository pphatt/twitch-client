"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

import { cn, sleep } from "@/lib/utils"
import { useDebounce } from "@/hooks/use-debounce"
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command/command"
import styles from "@/styles/components/search/search-tags.module.scss"

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
    <div className={styles["search-categories-tags"]}>
      <Command
        shouldFilter={false}
        className={cn(styles["command"], {
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
          className={styles["command-input"]}
          placeholder="Search Categories Tags"
        />

        {focus && (
          <CommandList className={styles["command-list"]}>
            <CommandGroup>
              {["FPS", "Shooter", "Anime", "Vtuber"].map((name, index) => {
                return (
                  <CommandItem
                    key={index}
                    // value={manga.slug}
                    className={styles["command-item"]}
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
    </div>
  )
}
