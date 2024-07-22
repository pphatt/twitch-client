import * as React from "react"
import { createEditor, Editor, Node, Transforms, type Descendant } from "slate"
import {
  Editable,
  Slate,
  useFocused,
  withReact,
  type RenderElementProps,
} from "slate-react"

import { cn } from "@/lib/utils"
import styles from "@/styles/components/stream/chat/chat-input.module.scss"

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

interface ChatInputProps {
  message: string
  setMessage: (message: string) => void
  submit: () => void
}

export default function ChatInput({
  message,
  setMessage,
  submit,
}: ChatInputProps) {
  const editor = React.useMemo(() => withReact(createEditor()), [])

  const focus = useFocused()

  const renderElement = React.useCallback((props: RenderElementProps) => {
    return <DefaultElement {...props} />
  }, [])

  const onChange = React.useCallback(
    (value: Descendant[]) => {
      const isAstChange = editor.operations.some(
        (op) => "set_selection" !== op.type
      )

      if (isAstChange) {
        const content = serialize(value)
        setMessage(content)
      }
    },
    [editor.operations, setMessage]
  )

  React.useEffect(() => {
    if (!message) {
      Transforms.delete(editor, {
        at: {
          anchor: Editor.start(editor, []),
          focus: Editor.end(editor, []),
        },
      })
    }
  }, [editor, message])

  return (
    <div className={styles["chat-wysiwyg-input__box"]}>
      <Slate
        initialValue={INITIAL_SLATE_VALUE}
        editor={editor}
        onChange={onChange}
      >
        {!message && (
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
          className={cn(styles["chat-input"], {
            [`focus-visible`]: focus,
          })}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              // Prevent the enter character from being inserted.
              event.preventDefault()

              // Send text when the event occurs.
              void submit()
            }
          }}
          renderElement={renderElement}
        />
      </Slate>
    </div>
  )
}

const DefaultElement = (props: RenderElementProps) => {
  return <div {...props.attributes}>{props.children}</div>
}
