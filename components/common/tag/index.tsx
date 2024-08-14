import * as React from "react"
import type { ITag } from "@/types"

import { TagsWrapper, TagWrapper } from "@/components/common/tag/style"

export function Tags({ tags }: { tags: ITag[] }) {
  return (
    <TagsWrapper>
      {tags.map((tag, index) => (
        <Tag tag={tag} key={index} />
      ))}
    </TagsWrapper>
  )
}

const Tag = ({ tag }: { tag: ITag }) => {
  const { name } = tag

  return <TagWrapper href={"/"}>{name}</TagWrapper>
}
