"use client"

import { cn } from "@/utils/common"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import styles from "@/components/ui/modal/style.module.scss"

interface ModalProps {
  title: string
  description: string
  isOpen: boolean
  onClose: () => void
  children?: React.ReactNode
  contentClassname?: string
  titleClassname?: string
  descriptionClassname?: string
  closeButtonClassname?: string
}

export const Modal: React.FC<ModalProps> = ({
  title,
  description,
  isOpen,
  onClose,
  children,
  contentClassname,
  titleClassname,
  descriptionClassname,
  closeButtonClassname,
}) => {
  const onChange = (open: boolean) => {
    if (!open) {
      onClose()
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onChange}>
      <DialogContent
        className={cn(styles["dialog-content-wrapper"], contentClassname)}
        closeButtonClassname={closeButtonClassname}
      >
        <DialogHeader>
          <DialogTitle
            className={cn(styles["dialog-title-text"], titleClassname)}
          >
            {title}
          </DialogTitle>

          <DialogDescription className={descriptionClassname}>
            {description}
          </DialogDescription>
        </DialogHeader>

        <div>{children}</div>
      </DialogContent>
    </Dialog>
  )
}
