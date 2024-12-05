import * as React from "react"

import { Button } from "@/components/ui/button"
import { Modal } from "@/components/ui/modal"
import { Icons } from "@/components/icons"
import styles from "@/components/layouts/social/components/delete-post-modal/style.module.scss"

interface AlertModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  loading: boolean
}

export const DeletePostModal: React.FC<AlertModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  loading,
}) => {
  const [isMounted, setIsMounted] = React.useState(false)

  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <Modal
      title=""
      description="Post cannot be recovered after deletion. Are you sure you want to delete it?"
      isOpen={isOpen}
      onClose={onClose}
      contentClassname={styles["modal-content"]}
      closeButtonClassname={styles["close-btn"]}
    >
      <div className={styles["wrapper"]}>
        <Button
          className={styles["cancel-btn"]}
          disabled={loading}
          $variant="outline"
          onClick={onClose}
        >
          Cancel
        </Button>

        <Button
          disabled={loading}
          $variant="destructive"
          onClick={() => {
            onConfirm()
          }}
        >
          {loading && (
            <Icons.spinner className={styles["icon"]} aria-hidden="true" />
          )}
          Delete
        </Button>
      </div>
    </Modal>
  )
}
