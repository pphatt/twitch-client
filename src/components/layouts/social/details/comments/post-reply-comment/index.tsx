"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { formatTimeToNow } from "@/utils/common"
import { ClearEditorPlugin } from "@lexical/react/LexicalClearEditorPlugin"
import { LexicalComposer } from "@lexical/react/LexicalComposer"
import { ContentEditable } from "@lexical/react/LexicalContentEditable"
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary"
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin"
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin"
import { SocialRepository } from "@modules/user/infrastructure/repository/social.repository"
import type { PostComment } from "@modules/user/presentation/http/dto/response/social/get-all-comments.response.dto"
import type { EditorState } from "lexical"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import styles from "@/components/layouts/social/details/comments/post-reply-comment/style.module.scss"
import { RenderComment } from "@/components/layouts/social/details/comments/render-comment"
import { OnChangePlugin } from "@/components/lexical/onchange-plugin"
import { SubmitPlugin } from "@/components/lexical/submit-plugin"
import Theme from "@/components/lexical/theme"
import ToolbarPlugin from "@/components/lexical/toolbar-plugin"

function Placeholder() {
  return <div className={styles["editor-placeholder"]}>Reply...</div>
}

const editorConfig = {
  namespace: "Post comment",
  nodes: [],
  // Handling of errors during update
  onError(error: Error) {
    throw error
  },
  // The editor theme
  theme: Theme,
}

interface PostCommentProps {
  postId: string
  replyToId: string
  comment: PostComment
}

export default function PostReplyComment({
  comment,
  postId,
  replyToId,
}: PostCommentProps) {
  const { user, content, created } = comment

  const [isReplying, setIsReplying] = React.useState<boolean>(false)

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
        await SocialRepository.createComment({
          postId,
          content: editorState,
          parentId: replyToId,
        })

        router.refresh()
        callback()
        setIsReplying(false)
      } catch (e) {
        toast.error("Something went wrong. Try again!")
      }
    })
  }

  return (
    <div className={styles["replies-card-wrapper"]}>
      <div className={styles["replies-card-container"]}>
        <Link
          href={`/social/profile/${user.username}`}
          className={styles["user-comment-header-wrapper"]}
        >
          <div className={styles["comment-avatar-wrapper"]}>
            <img
              src={user.image._url ?? "/avatar/user-default-picture.png"}
              alt={""}
              className={styles["comment-avatar"]}
            />
          </div>

          <div className={styles["comment-username-container"]}>
            <span className={styles["comment-username-text"]}>
              {user.username}
            </span>
          </div>
        </Link>

        <div className={styles["comment-content-text-wrapper"]}>
          <div className={styles["comment-text-wrapper"]}>
            <RenderComment text={content} />
          </div>
        </div>
      </div>

      <div className={styles["comment-action-wrapper"]}>
        <span className={styles["comment-created-at"]}>
          {formatTimeToNow(created)}
        </span>

        <div className={styles["comment-action-container"]}>
          <Button
            onClick={() => {
              setIsReplying(true)
            }}
            className={styles["action-btn"]}
            $variant={"ghost"}
          >
            <Icons.messageSquareText />
            Reply
          </Button>

          <Button className={styles["action-btn"]} $variant={"ghost"}>
            <Icons.like
              style={{
                marginBottom: "2px",
              }}
            />
            Like
          </Button>
        </div>
      </div>

      {isReplying && (
        <div className={styles["comment-wrapper"]}>
          <LexicalComposer
            initialConfig={{
              ...editorConfig,
              editorState: `{
                  "root": {
                    "children": [{
                      "children": [{
                        "detail":0,
                        "format":1,
                        "mode":"normal",
                        "style":"",
                        "text":"@${comment.user.username} ",
                        "type":"text",
                        "version":1
                      }], "direction": null, "format": "", "indent": 0, "type": "paragraph", "version": 1
                    }], "direction": null, "format": "", "indent": 0, "type": "root", "version": 1
                  }
                }`,
            }}
          >
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
      )}
    </div>
  )
}
