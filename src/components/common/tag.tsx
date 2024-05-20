import * as React from "react"
import Link from "next/link"
import type { ITag } from "@/types"

import styles from "@/styles/components/common/tag.module.scss"

export function Tag({ tags }: { tags: ITag[] }) {
  return (
    <div className={styles["tags"]}>
      {tags.map(({ name }) => (
        <Link href={"/"} className={styles["tag-link"]}>
          {name}
        </Link>
      ))}
    </div>
  )
}
