import * as React from "react"
import { cn } from "@/utils/common"
import { cva, type VariantProps } from "class-variance-authority"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import styles from "@/components/layouts/social/chat/chat-bubble/style.module.scss"

export default function MessageLoading() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="4" cy="12" r="2" fill="currentColor">
        <animate
          id="spinner_qFRN"
          begin="0;spinner_OcgL.end+0.25s"
          attributeName="cy"
          calcMode="spline"
          dur="0.6s"
          values="12;6;12"
          keySplines=".33,.66,.66,1;.33,0,.66,.33"
        />
      </circle>
      <circle cx="12" cy="12" r="2" fill="currentColor">
        <animate
          begin="spinner_qFRN.begin+0.1s"
          attributeName="cy"
          calcMode="spline"
          dur="0.6s"
          values="12;6;12"
          keySplines=".33,.66,.66,1;.33,0,.66,.33"
        />
      </circle>
      <circle cx="20" cy="12" r="2" fill="currentColor">
        <animate
          id="spinner_OcgL"
          begin="spinner_qFRN.begin+0.2s"
          attributeName="cy"
          calcMode="spline"
          dur="0.6s"
          values="12;6;12"
          keySplines=".33,.66,.66,1;.33,0,.66,.33"
        />
      </circle>
    </svg>
  )
}

// ChatBubble
const chatBubbleVariant = cva(styles["chat-bubble-variant-default"], {
  variants: {
    variant: {
      received: styles["receiver-side"],
      sent: styles["sender-side"],
    },
  },
  defaultVariants: {
    variant: "received",
  },
})

interface ChatBubbleProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof chatBubbleVariant> {}

const ChatBubble = React.forwardRef<HTMLDivElement, ChatBubbleProps>(
  ({ className, variant, children, ...props }, ref) => (
    <div
      className={cn(
        chatBubbleVariant({ variant, className }),
        styles["chat-bubble-wrapper"]
      )}
      ref={ref}
      {...props}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child) && typeof child.type !== "string"
          ? // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            React.cloneElement(child, {
              variant,
            } as React.ComponentProps<typeof child.type>)
          : child
      )}
    </div>
  )
)
ChatBubble.displayName = "ChatBubble"

// ChatBubbleAvatar
interface ChatBubbleAvatarProps {
  src?: string
  fallback?: string
  className?: string
}

const ChatBubbleAvatar: React.FC<ChatBubbleAvatarProps> = ({
  src,
  fallback,
  className,
}) => (
  <Avatar className={cn(className, styles["user-image-wrapper"])}>
    <AvatarImage src={src} alt="Avatar" className={styles["user-image"]} />
    <AvatarFallback>{fallback}</AvatarFallback>
  </Avatar>
)

// ChatBubbleMessage
const chatBubbleMessageVariants = cva(styles["chat-bubble-message-default"], {
  variants: {
    variant: {
      received: styles["message-receiver-side"],
      sent: styles["message-sender-side"],
    },
  },
  defaultVariants: {
    variant: "received",
  },
})

interface ChatBubbleMessageProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof chatBubbleMessageVariants> {
  isLoading?: boolean
}

const ChatBubbleMessage = React.forwardRef<
  HTMLDivElement,
  ChatBubbleMessageProps
>(({ className, variant, isLoading = false, children, ...props }, ref) => (
  <div
    className={cn(chatBubbleMessageVariants({ variant, className }))}
    ref={ref}
    {...props}
  >
    {isLoading ? (
      <div className={styles["message-loading-wrapper"]}>
        <MessageLoading />
      </div>
    ) : (
      <span>{children}</span>
    )}
  </div>
))
ChatBubbleMessage.displayName = "ChatBubbleMessage"

export {
  ChatBubble,
  ChatBubbleAvatar,
  ChatBubbleMessage,
  chatBubbleVariant,
  chatBubbleMessageVariants,
}
