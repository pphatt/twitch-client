import React from "react"

import type { ChapterInformation } from "@/types/comic-k"

export function useIsNotManga(chapter: ChapterInformation) {
  return React.useMemo(() => {
    return (
      chapter.chapter.md_comics.country === "cn" ||
      chapter.chapter.md_comics.country === "kr" ||
      chapter.chapter.md_comics.country === "gb"
    )
  }, [chapter])
}
