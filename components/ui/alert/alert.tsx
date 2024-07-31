import * as React from "react"

import {
  AlertDescriptionWrapper,
  AlertTitleWrapper,
  AlertWrapper,
  type AlertVariantOption,
} from "@/components/ui/alert/style"

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & AlertVariantOption
>(({ $variant = "default", ...props }, ref) => (
  <AlertWrapper ref={ref} $variant={$variant} role="alert" {...props} />
))
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ ...props }, ref) => <AlertTitleWrapper ref={ref} {...props} />)
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ ...props }, ref) => <AlertDescriptionWrapper ref={ref} {...props} />)
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }
