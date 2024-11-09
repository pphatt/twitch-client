import styled from "styled-components"

import { TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const TabControlWrapper = styled(TabsList)`
  position: relative;

  justify-content: flex-start;
  flex-wrap: nowrap;
  flex-shrink: 0;
  gap: 2rem;

  color: initial;
  background-color: transparent;

  width: calc(100% - 0.75rem);
  height: 2.75rem !important;

  border-radius: 0 !important;

  padding: 0;

  //box-shadow:
  //  0 0 #0000,
  //  0 0 #0000,
  //  inset 0 -2px 0 #393b40;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 2px;
    background-color: #393b40;
    z-index: -1;
  }
`

export const TabControl = styled(TabsTrigger)`
  position: relative;

  align-items: center;
  align-self: center;

  height: 100%;

  border-radius: 0;
  border-bottom-width: 2px !important;
  border-bottom-color: transparent;

  padding: 0;

  font-size: 1rem;
  line-height: 1.5rem;

  cursor: pointer;

  font-weight: 700;
  white-space: nowrap;

  transition: none;

  &[data-state="active"] {
    color: initial;
    background-color: transparent;

    border-bottom: solid hsl(var(--color-twitch-orange-11));
  }
`

export const FormLayoutWrapper = styled(TabsContent)`
  height: 100%;
  padding-right: 0.5rem;
  margin: 1.75rem 0 0 0;

  overflow-y: scroll;
`

export const FormLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  height: 100%;
`
