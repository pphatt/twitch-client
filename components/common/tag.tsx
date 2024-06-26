import * as React from "react"
import Link from "next/link"
import type { ITag } from "@/types"

import styles from "@/styles/components/common/tag.module.scss"

export function Tags({ tags }: { tags: ITag[] }) {
  return (
    <div className={styles["tags"]}>
      {tags.map((tag, index) => (
        <Tag tag={tag} key={index} />
      ))}
    </div>
  )
}

const Tag = ({ tag }: { tag: ITag }) => {
  const { name } = tag

  return (
    <Link href={"/"} className={styles["tag-link"]}>
      {name}
    </Link>
  )
}
