"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { Modal } from "@/components/ui/modal"
import { Icons } from "@/components/icons"
import styles from "@/components/modals/role-alert-modal/style.module.scss"

interface AlertModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  loading: boolean

  roleName: string
}

export const RoleAlertModal: React.FC<AlertModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  loading,
  roleName,
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
      title={`Delete ${roleName}`}
      description="Delete role action cannot be undone."
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className={styles["wrapper"]}>
        <Button
          className={styles["cancel-button"]}
          disabled={loading}
          $variant="outline"
          onClick={onClose}
        >
          Cancel
        </Button>

        <Button
          className={styles["accept-button"]}
          disabled={loading}
          $variant="destructive"
          onClick={onConfirm}
        >
          {loading && (
            <Icons.spinner className={styles["icon"]} aria-hidden="true" />
          )}
          Continue
        </Button>
      </div>
    </Modal>
  )
}
