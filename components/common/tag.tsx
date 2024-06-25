import * as React from "react"
import Link from "next/link"
import type { ITag } from "@/types"
import { For } from "million/react"

import styles from "@/styles/components/common/tag.module.scss"

export function Tags({ tags }: { tags: ITag[] }) {
  return (
    <div className={styles["tags"]}>
      <For each={tags}>
        {(tag, index) => <Tag tag={tag} key={index} />}
      </For>
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
