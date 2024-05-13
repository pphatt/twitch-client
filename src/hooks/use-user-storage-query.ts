import type { IUserStateData } from "@/types"

import { useStorageQuery } from "@/hooks/use-local-storage-query"

/**
 * This hook is HOC of useStorageQuery but just for persist "user"
 *
 * Just use this in with default react hook (useMemo or useCallback).
 *
 * Somehow this broken when using in useQuery aka bunch of useEffect bts.
 *
 * Some of the reason can be hoisting or mounting stuff
 * */
export function useUserStorageQuery() {
  const query = useStorageQuery<IUserStateData>("user", {
    info: {
      accept_mature_content: false,
      accept_erotic_content: false,
      accept_gore_content: false,
      exclude_mylist_updates: false,
      show_reading_history: true,
      reader_mode: "scroll",
      reader_mode_sm: "scroll",
      reader_remove_margin: false,
      reader_remove_margin_sm: false,
      filtered_comic_type: ["manga", "manhwa", "manhua"],
      reader_direction: "right",
    },
  })

  return query
}
