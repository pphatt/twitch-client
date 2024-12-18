import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { ChevronDown } from "lucide-react"
import styled from "styled-components"

import { enterKeyframes, exitKeyframes } from "@/styles/abstract/_mixins"

export const NavigationMenuPrimitiveRoot = styled(NavigationMenuPrimitive.Root)`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  max-width: max-content;

  z-index: 10;
`

export const NavigationMenuPrimitiveList = styled(NavigationMenuPrimitive.List)`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
`

export const NavigationMenuPrimitiveTrigger = styled(
  NavigationMenuPrimitive.Trigger
)`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  color: hsl(var(--popover-foreground));
  background-color: transparent;

  border-radius: calc(0.5rem - 2px);

  width: max-content;
  height: 2.5rem;

  padding: 0.5rem 1rem;

  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;

  cursor: pointer;

  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;

  &:hover {
    color: hsl(var(--accent-foreground));
    background-color: hsl(var(--accent));
  }

  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;

    color: hsl(var(--accent-foreground));
    background-color: hsl(var(--accent));
  }

  &[data-state="open"] {
    svg {
      transform: rotate(180deg);
    }
  }
`

export const ChevronDownIcon = styled(ChevronDown)`
  position: relative;
  top: 1px;

  display: block;
  vertical-align: middle;

  width: 0.75rem;
  height: 0.75rem;

  margin-left: 0.25rem;

  transition-property:
    color,
    background-color,
    border-color,
    text-decoration-color,
    fill,
    stroke,
    opacity,
    box-shadow,
    transform,
    filter,
    backdrop-filter,
    -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.2s;

  animation-duration: 0.2s;
`

export const NavigationMenuPrimitiveContent = styled(
  NavigationMenuPrimitive.Content
)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  animation-duration: 0.15s;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  /*
    - Can look-up the old animation of this in git repository
    - Because of the enter-scale of animated-in of the parent initialize, that make the animation have scaling effect
    and that is not what we want. So just re-initialize it again
    - commit url: https://github.com/pphatt/twitch-client/commit/fa437b04a735df8567097af086fbe96902a6623f
  */

  @media only screen and (min-width: 768px) {
    & {
      width: auto;
    }
  }

  &[data-motion^="from-"] {
    --tw-enter-scale: 1;
    --tw-enter-opacity: 0;

    animation-name: ${enterKeyframes};
  }

  &[data-motion^="to-"] {
    --tw-exit-scale: 1;
    --tw-exit-opacity: 0;

    animation-name: ${exitKeyframes};
  }

  &[data-motion="from-start"] {
    --tw-enter-translate-x: -13rem;
  }

  &[data-motion="from-end"] {
    --tw-enter-translate-x: 13rem;
  }

  &[data-motion="to-start"] {
    --tw-exit-translate-x: -13rem;
  }

  &[data-motion="to-end"] {
    --tw-exit-translate-x: 13rem;
  }
`

export const NavigationMenuViewportWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 100%;

  display: flex;
  justify-content: center;
`

export const NavigationMenuPrimitiveViewport = styled(
  NavigationMenuPrimitive.Viewport
)`
  position: relative;
  transform-origin: top center;

  color: hsl(var(--accent-foreground));
  background-color: hsl(var(--accent));

  border-width: 1px;
  border-radius: calc(0.5rem - 2px);

  height: var(--radix-navigation-menu-viewport-height);

  margin-top: 0.375rem;

  overflow: hidden;

  box-shadow:
    0 0 #000,
    0 0 #000,
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -4px rgba(0, 0, 0, 0.1);

  animation-duration: 150ms;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  @media (min-width: 768px) {
    width: var(--radix-navigation-menu-viewport-width);
  }

  &[data-state="open"] {
    --tw-enter-scale: 0.9;

    animation-name: ${enterKeyframes};
  }

  &[data-state="closed"] {
    --tw-exit-scale: 0.95;

    animation-name: ${exitKeyframes};
  }
`

export const NavigationMenuPrimitiveIndicator = styled(
  NavigationMenuPrimitive.Indicator
)`
  top: 100%;

  display: flex;
  justify-content: center;
  align-items: flex-end;

  height: 0.375rem;

  overflow: hidden;

  &[data-state="visible"] {
  }

  &[data-state="hidden"] {
  }
`

export const NavigationMenuIndicatorWrapper = styled.div`
  position: relative;
  top: 60%;

  height: 0.5rem;
  width: 0.5rem;

  //border-color: hsl();
  border-radius: calc(0.5rem - 2px);

  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
`
