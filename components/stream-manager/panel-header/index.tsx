"use client"

import * as React from "react"
import { useEditLayout, useEditLayoutState } from "@/store/state/dashboard"
import {
  MosaicContext,
  MosaicWindowContext,
  type MosaicRootActions,
} from "react-mosaic-component"
import type { MosaicKey } from "react-mosaic-component/lib/types"

import { useMosaicUpdateLayout } from "@/hooks/useMosaicUpdateLayout"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Icons } from "@/components/icons"
import {
  CloseButton,
  CloseButtonContainer,
  CloseButtonWrapper,
  DropdownMenuContentWrapper as DropdownMenuContent,
  DropdownMenuItemWrapper as DropdownMenuItem,
  DropdownTrigger,
  DropdownTriggerWrapper,
  PanelHeaderClose,
  PanelHeaderControl,
  PanelHeaderText,
  PanelHeaderTextWrapper,
  PanelHeaderWrapper,
} from "@/components/stream-manager/panel-header/style"

interface PanelHeaderProps extends React.ComponentPropsWithoutRef<"div"> {
  title: string
}

export default function PanelHeader({ title, ...props }: PanelHeaderProps) {
  const { isEditing, setIsEditing } = useEditLayout()

  const { layout } = useMosaicUpdateLayout()

  const { setEditLayout } = useEditLayoutState()

  const context = React.useContext(MosaicWindowContext)

  const createRemove = React.useCallback(
    (mosaicActions: MosaicRootActions<MosaicKey>) => {
      return () => mosaicActions.remove(context.mosaicWindowActions.getPath())
    },
    [context.mosaicWindowActions]
  )

  const handlePopOut = React.useCallback(() => {
    switch (title) {
      case "Activity Feed": {
        window.open(
          "/u/tienphat/stream-manager/activity-feed",
          "_blank",
          "top=600,left=800,width=360,height=450,popup=true"
        )

        break
      }
      case "My Chat": {
        window.open(
          "/u/tienphat/stream-manager/chat",
          "_blank",
          "top=600,left=800,width=360,height=450,popup=true"
        )

        break
      }
    }
  }, [title])

  return (
    <PanelHeaderWrapper {...props}>
      <PanelHeaderTextWrapper>
        <PanelHeaderText>{title}</PanelHeaderText>
      </PanelHeaderTextWrapper>

      <PanelHeaderControl>
        {isEditing ? (
          <PanelHeaderClose>
            <MosaicContext.Consumer>
              {({ mosaicActions }) => (
                <CloseButton onClick={createRemove(mosaicActions)}>
                  <CloseButtonWrapper>
                    <CloseButtonContainer>
                      <Icons.closePanel />
                    </CloseButtonContainer>
                  </CloseButtonWrapper>
                </CloseButton>
              )}
            </MosaicContext.Consumer>
          </PanelHeaderClose>
        ) : (
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <DropdownTrigger aria-label={title}>
                <DropdownTriggerWrapper>
                  <Icons.ellipsisVertical />
                </DropdownTriggerWrapper>
              </DropdownTrigger>
            </DropdownMenuTrigger>

            <DropdownMenuContent align={"end"} sideOffset={-1}>
              <DropdownMenuItem asChild>
                <Button onClick={handlePopOut}>
                  <span>Pop-out {title}</span>
                </Button>
              </DropdownMenuItem>

              <DropdownMenuItem asChild>
                <Button
                  disabled={isEditing ?? true}
                  onClick={() => {
                    if (!isEditing) {
                      setEditLayout(layout)
                      setIsEditing(!isEditing)
                    }
                  }}
                >
                  <span>Edit Layout</span>
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </PanelHeaderControl>
    </PanelHeaderWrapper>
  )
}
