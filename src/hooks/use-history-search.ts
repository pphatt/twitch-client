import * as React from "react"
import { useSearchParams } from "next/navigation"
import { queryClient } from "@/providers/tanstack-persist-provider"
import type { HistoryComic } from "@/types"
import { useQuery } from "@tanstack/react-query"

export function useHistorySearch() {
  const searchParams = useSearchParams()

  const q = searchParams.get("q") ?? ""

  const [data, setData] = React.useState<HistoryComic[]>()

  const [query, setQuery] = React.useState(q)

  const setQuerySearch = React.useCallback((value: string) => {
    setQuery(value)
  }, [])

  /*
   * for initial render (*somehow useEffect cannot get queryClient.getQueryData<HistoryComic[]>(["get-history-comics"]))
   * after the initial render the useEffect would be used for filter data
   * */
  useQuery({
    queryKey: ["history-comics"],
    queryFn: () => {
      const query = queryClient.getQueryData<HistoryComic[]>([
        "get-history-comics",
      ])

      setData(
        [...query!].filter((value) =>
          value.comics.title.toLowerCase().includes(q)
        )
      )

      return [...query!].filter((value) =>
        value.comics.title.toLowerCase().includes(q)
      )
    },
    refetchOnWindowFocus: false,
  })

  React.useEffect(() => {
    const queryT = queryClient.getQueryData<HistoryComic[]>([
      "get-history-comics",
    ])

    if (!queryT) {
      setData(queryT)
      return
    }

    setData(
      [...queryT].filter((value) =>
        value.comics.title.toLowerCase().includes(query)
      )
    )
  }, [query])

  return { data, query, setQuerySearch }
}
