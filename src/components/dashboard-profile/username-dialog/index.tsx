import * as React from "react"

import {
  Dialog,
  DialogOverlay,
  DialogPortal,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  ContentWrapper,
  DialogClose,
  ModalHeaderContainer,
  ModalHeaderWrapper,
  ModalWrapper,
  WarningDescriptionText,
  WarningDescriptionTextHighlight,
} from "@/components/dashboard-profile/username-dialog/style"
import UsernameForm from "@/components/forms/dashboard/username-form"
import { Icons } from "@/components/icons"

interface UsernameDialogProps {
  children: React.ReactNode
  username: string
}

export default function UsernameDialog({
  username,
  children,
}: UsernameDialogProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <Dialog
      open={open}
      onOpenChange={(e) => {
        setOpen(e)
      }}
    >
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogPortal>
        <DialogOverlay
          style={{
            overflowY: "auto",
          }}
        />

        <ModalWrapper
          onEscapeKeyDown={(event) => event.preventDefault()}
          onPointerDownOutside={(event) => event.preventDefault()}
        >
          <ModalHeaderWrapper>
            <ModalHeaderContainer as={"div"}>
              <h2>Change Username</h2>

              <DialogClose>
                <Icons.closeX />
                <span>Close</span>
              </DialogClose>
            </ModalHeaderContainer>

            <ContentWrapper>
              <div>
                <WarningDescriptionText>
                  Username updates can be performed once every 60 days. The
                  update takes effect immediately and will affect how your
                  followers recognize you.
                </WarningDescriptionText>
              </div>

              <div
                style={{
                  marginTop: "10px",
                }}
              >
                <WarningDescriptionText>
                  <WarningDescriptionTextHighlight>
                    {username}
                  </WarningDescriptionTextHighlight>{" "}
                  will be released back into the pool of available usernames
                  after 6 months.
                </WarningDescriptionText>
              </div>

              <UsernameForm cancel={() => setOpen(false)} />
            </ContentWrapper>
          </ModalHeaderWrapper>
        </ModalWrapper>
      </DialogPortal>
    </Dialog>
  )
}
