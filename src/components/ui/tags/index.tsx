import React, { useState } from "react"
import { type Tag, TagInput } from "emblor"

const Example = () => {
  const tags = [
    {
      id: "959160799",
      text: "Sports",
    },
    {
      id: "2022681033",
      text: "Programming",
    },
    {
      id: "3754806344",
      text: "Travel",
    },
  ]

  const [exampleTags, setExampleTags] = useState<Tag[]>(tags)
  const [activeTagIndex, setActiveTagIndex] = useState<number | null>(null)

  return (
    <TagInput
      tags={exampleTags}
      setTags={(newTags) => {
        setExampleTags(newTags)
      }}
      placeholder="Add a tag"
      styleClasses={{
        input: "w-full sm:max-w-[350px]",
      }}
      activeTagIndex={activeTagIndex}
      setActiveTagIndex={setActiveTagIndex}
    />
  )
}
