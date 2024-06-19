"use client"

import * as React from "react"
import { createEditor, Node, type Descendant } from "slate"
import {
  Editable,
  Slate,
  withReact,
  type RenderElementProps,
} from "slate-react"

import { cn } from "@/lib/utils"
import styles from "@/styles/dashboard/stream-manager/_components/chat-input.module.scss"

const INITIAL_SLATE_VALUE = [
  {
    type: "paragraph",
    children: [{ text: "" }],
  },
]

const PLACEHOLDER_VALUE = "Send a message"

const serialize = (value: Descendant[]) => {
  return (
    value
      // Return the string content of each paragraph in the value's children.
      .map((n) => Node.string(n))
      // Join them all with space denoting paragraphs.
      .join(" ")
  )
}

export default function ChatInput() {
  const editor = React.useMemo(() => withReact(createEditor()), [])

  const [value, setValue] = React.useState("")
  const [focus, setFocus] = React.useState(false)

  const renderElement = React.useCallback((props: RenderElementProps) => {
    return <DefaultElement {...props} />
  }, [])

  return (
    <div className={styles["chat-wysiwyg-input__box"]}>
      <Slate
        initialValue={INITIAL_SLATE_VALUE}
        editor={editor}
        onChange={(value) => {
          const isAstChange = editor.operations.some(
            (op) => "set_selection" !== op.type
          )

          if (isAstChange) {
            const content = serialize(value)
            setValue(content)
          }
        }}
      >
        {!value && (
          <div
            className={styles["chat-wysiwyg-input__placeholder"]}
            style={{
              paddingLeft: "10px",
              marginLeft: "2px",
            }}
          >
            {PLACEHOLDER_VALUE}
          </div>
        )}

        <Editable
          style={{
            maxHeight: "calc(97.5px + 20px)",
            paddingRight: "85px",
            paddingBottom: "10px",
            paddingLeft: "10px",
            outline: "none",
          }}
          data-focus-visible-added={focus ? "" : null}
          name={"chat-input"}
          data-a-target={"chat-input"}
          data-placeholder={PLACEHOLDER_VALUE}
          aria-label={PLACEHOLDER_VALUE}
          onBlur={() => setFocus(false)}
          onFocus={() => setFocus(true)}
          className={cn(styles["chat-input"], {
            [`focus-visible`]: focus,
          })}
          renderElement={renderElement}
        />
      </Slate>
    </div>
  )
}

const DefaultElement = (props: RenderElementProps) => {
  return <div {...props.attributes}>{props.children}</div>
}
