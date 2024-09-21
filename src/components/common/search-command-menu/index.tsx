"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { sleep } from "@/utils/common"

import { useDebounce } from "@/hooks/useDebounce"
import useWindowEvent from "@/hooks/useWindowEvent"
import {
  CommandWrapper as Command,
  CommandGroupWrapper as CommandGroup,
  CommandInputWrapper as CommandInput,
  CommandItemWrapper as CommandItem,
  CommandListWrapper as CommandList,
} from "@/components/common/search-command-menu/style"

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
    <Command shouldFilter={false} $isFocus={focus}>
      <CommandInput
        value={query}
        onFocus={() => setFocus(!focus)}
        onBlur={() => setFocus(!focus)}
        onValueChange={(query) => {
          setQuery(query)
        }}
        placeholder="Search"
      />
      {focus && (
        <CommandList>
          <CommandGroup>
            {["league of legend", "valorant", "kai cenat"].map(
              (name, index) => {
                return (
                  <CommandItem
                    key={index}
                    // value={manga.slug}
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
