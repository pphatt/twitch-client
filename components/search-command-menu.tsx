"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

import { cn, sleep } from "@/lib/utils"
import { useDebounce } from "@/hooks/use-debounce"
import useWindowEvent from "@/hooks/use-window-event"
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import styles from "@/styles/components/search-command-menu.module.scss"

export function SearchCommandMenu() {
  const router = useRouter()

  const [open, setOpen] = React.useState(false)
  const [focus, setFocus] = React.useState(false)

  const [query, setQuery] = React.useState("")
  const debouncedQuery = useDebounce(query, 300)
  const [data, setData] = React.useState<null>(null)
  const [isPending, startTransition] = React.useTransition()

  // const [recentSearch, setRecentSearch] = useLocalStorage<IRecentSearch[]>({
  //   key: "AUTOCOMPLETE_RECENT_SEARCHES:qs-with-rs-example",
  // })

  React.useEffect(() => {
    if (!open) {
      setQuery("")
    }
  }, [open])

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
        console.log(router)
      } catch (err) {
        throw new Error("Something went wrong...")
      }
    }

    startTransition(fetchData)

    return () => setData(null)
  }, [debouncedQuery])

  useWindowEvent("keydown", (e) => {
    if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault()
      setOpen((open) => !open)
    }
  })

  return (
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
        placeholder="Search"
      />
      {focus && (
        <CommandList className={styles["command-list"]}>
          <CommandGroup>
            {["league of legend", "valorant", "kai cenat"].map(
              (name, index) => {
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
              }
            )}
          </CommandGroup>
        </CommandList>
      )}
    </Command>
  )
}
