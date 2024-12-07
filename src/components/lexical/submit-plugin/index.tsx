import * as React from "react"
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext"
import { useLexicalIsTextContentEmpty } from "@lexical/react/useLexicalIsTextContentEmpty"
import { $getRoot } from "lexical"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import styles from "@/components/lexical/submit-plugin/style.module.scss"

export const SubmitPlugin = ({
  onSubmit,
  isPending,
}: {
  onSubmit: (callback: () => void) => void
  isPending: boolean
}) => {
  const [editor] = useLexicalComposerContext()
  const isEmpty = useLexicalIsTextContentEmpty(editor)

  const editorStateJSON = editor.toJSON()

  const handleClearEditor = React.useCallback(() => {
    onSubmit(() => {
      editor.update(() => {
        const root = $getRoot()
        root.clear()
      })
    })
  }, [editor, onSubmit])

  return (
    <div className={styles["post-btn"]}>
      <Button
        type="submit"
        disabled={isPending || isEmpty}
        className={styles["submit-btn"]}
        onClick={handleClearEditor}
      >
        {isPending && (
          <Icons.spinner className={styles["icon"]} aria-hidden="true" />
        )}
        <span>Send</span>
      </Button>
    </div>
  )
}
