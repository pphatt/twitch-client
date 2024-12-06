"use client"

import * as React from "react"
import { LexicalComposer } from "@lexical/react/LexicalComposer"
import { ContentEditable } from "@lexical/react/LexicalContentEditable"
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary"
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin"

import Theme from "@/components/lexical/theme"

interface RenderCommentProps {
  text: string
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

export function RenderComment({ text }: RenderCommentProps) {
  return (
    <LexicalComposer
      initialConfig={{
        ...editorConfig,
        editable: false,
        editorState: text,
      }}
    >
      <RichTextPlugin
        contentEditable={<ContentEditable />}
        placeholder={<></>}
        ErrorBoundary={LexicalErrorBoundary}
      />
    </LexicalComposer>
  )
}
