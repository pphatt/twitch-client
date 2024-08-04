"use client"

import * as React from "react"
import { type DialogProps } from "@radix-ui/react-dialog"
import { Command as CommandPrimitive } from "cmdk"
import { Search } from "lucide-react"
import styled, { StyleSheetManager } from "styled-components"

import {
  CommandPrimitiveGroup,
  CommandPrimitiveInput,
  CommandPrimitiveInputWrapper,
  CommandPrimitiveItem,
  CommandPrimitiveList,
  CommandPrimitiveSeparator,
  CommandPrimitiveWrapper,
  CommandShortcutWrapper,
} from "@/components/ui/command/style"
import {
  Dialog,
  DialogContent,
  type DialogPosition,
} from "@/components/ui/dialog/dialog"

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ ...props }, ref) => <CommandPrimitiveWrapper ref={ref} {...props} />)
Command.displayName = CommandPrimitive.displayName

interface CommandDialogProps extends DialogProps, DialogPosition {
  style?: React.CSSProperties
}

// we have to put this here bc Command using React context, so it has to be init before use
const CommandWrapper = styled(Command)`
  & [cmdk-group-heading] {
    color: hsl(var(--muted-foreground));
    font-weight: 500;

    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  & [cmdk-group] {
    padding-left: 0.5rem;
    padding-right: 0.5rem;

    &:not([hidden]) ~ &[cmdk-group] {
      padding: 0;
    }
  }

  & [cmdk-input-wrapper] {
    svg {
      width: 1.25rem;
      height: 1.25rem;
    }
  }

  & [cmdk-input] {
    height: 3rem;
  }

  & [cmdk-item] {
    padding: 0.5rem;

    svg {
      height: 1.25rem;
      width: 1.25rem;
    }
  }
`

const CommandDialog = ({
  children,
  $position = "default",
  ...props
}: CommandDialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent
        $types={"command"}
        $position={$position}
        style={props.style}
      >
        <CommandWrapper shouldFilter={false}>{children}</CommandWrapper>
      </DialogContent>
    </Dialog>
  )
}

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <StyleSheetManager shouldForwardProp={() => true}>
    <CommandPrimitiveInputWrapper cmdk-input-wrapper="">
      <Search />
      <CommandPrimitiveInput ref={ref} className={className} {...props} />
    </CommandPrimitiveInputWrapper>
  </StyleSheetManager>
))

CommandInput.displayName = CommandPrimitive.Input.displayName

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ ...props }, ref) => <CommandPrimitiveList ref={ref} {...props} />)

CommandList.displayName = CommandPrimitive.List.displayName

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>(({ ...props }, ref) => <CommandPrimitive.Empty ref={ref} {...props} />)

CommandEmpty.displayName = CommandPrimitive.Empty.displayName

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ ...props }, ref) => <CommandPrimitiveGroup ref={ref} {...props} />)

CommandGroup.displayName = CommandPrimitive.Group.displayName

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ ...props }, ref) => <CommandPrimitiveSeparator ref={ref} {...props} />)

CommandSeparator.displayName = CommandPrimitive.Separator.displayName

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ ...props }, ref) => <CommandPrimitiveItem ref={ref} {...props} />)

CommandItem.displayName = CommandPrimitive.Item.displayName

const CommandShortcut = ({
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return <CommandShortcutWrapper {...props} />
}

CommandShortcut.displayName = "CommandShortcut"

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
}
