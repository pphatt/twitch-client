"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { ClearEditorPlugin } from "@lexical/react/LexicalClearEditorPlugin"
import { LexicalComposer } from "@lexical/react/LexicalComposer"
import { ContentEditable } from "@lexical/react/LexicalContentEditable"
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary"
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin"
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin"
import { SocialRepository } from "@modules/user/infrastructure/repository/social.repository"
import { type EditorState } from "lexical"
import { toast } from "sonner"

import styles from "@/components/layouts/social/details/comments/comment-input/style.module.scss"
import { OnChangePlugin } from "@/components/lexical/onchange-plugin"
import { SubmitPlugin } from "@/components/lexical/submit-plugin"
import Theme from "@/components/lexical/theme"
import ToolbarPlugin from "@/components/lexical/toolbar-plugin"

function Placeholder() {
  return (
    <div className={styles["editor-placeholder"]}>Post your comment now~</div>
  )
}

const editorConfig = {
  namespace: "Blog comment",
  nodes: [],
  // Handling of errors during update
  onError(error: Error) {
    throw error
  },
  // The editor theme
  theme: Theme,
  editorState: `{
    "root": {
      "children": [{
        "children": [], "direction": null, "format": "", "indent": 0, "type": "paragraph", "version": 1
      }], "direction": null, "format": "", "indent": 0, "type": "root", "version": 1
    }
  }`,
}

interface CommentsInputProps {
  postId: string
}

export default function CommentsInput({ postId }: CommentsInputProps) {
  const router = useRouter()
  const [isPending, startTransition] = React.useTransition()

  const [editorState, setEditorState] = React.useState<string>("")

  const onChange = React.useCallback((editorState: EditorState) => {
    const editorStateJSON = editorState.toJSON()
    setEditorState(JSON.stringify(editorStateJSON))
  }, [])

  function onSubmit(callback: () => void) {
    startTransition(async () => {
      try {
        await SocialRepository.createComment({ postId, content: editorState })

        router.refresh()
        callback()
      } catch (e) {
        toast.error("Something went wrong. Try again!")
      }
    })
  }

  return (
    <div className={styles["comment-wrapper"]}>
      <LexicalComposer initialConfig={editorConfig}>
        <div className={styles["editor-container"]}>
          <ToolbarPlugin />
          <div className={styles["editor-inner"]}>
            <RichTextPlugin
              contentEditable={
                <ContentEditable className={styles["editor-input"]} />
              }
              placeholder={<Placeholder />}
              ErrorBoundary={LexicalErrorBoundary}
            />
            <HistoryPlugin />
            <ClearEditorPlugin />
            <OnChangePlugin onChange={onChange} />
          </div>
        </div>
        <SubmitPlugin isPending={isPending} onSubmit={onSubmit} />
      </LexicalComposer>
    </div>
  )
}
