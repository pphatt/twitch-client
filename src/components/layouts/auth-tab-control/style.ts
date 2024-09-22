import styled from "styled-components"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const AuthFormLayout = styled(Card)`
  display: flex;
  flex-direction: column;

  background-color: hsl(var(--background));

  width: 100%;

  border: 0;
  border-radius: var(--radius);

  padding: 30px;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const ModalHeaderWrapper = styled(CardHeader)`
  color: #fff;

  padding: 0;
  margin-top: 5px;
  margin-bottom: 2.5rem;
`

export const ModalHeaderContainer = styled(CardTitle)`
  position: relative;

  font-size: 1.3rem;
  line-height: 1;
  font-weight: 600;

  letter-spacing: -0.025em;
`

export const TabControlWrapper = styled(TabsList)`
  justify-content: flex-start;
  gap: 1rem;

  color: initial;
  background-color: transparent;

  padding: 0;
`

export const TabControl = styled(TabsTrigger)`
  align-self: center;

  height: 100%;

  border-radius: 0;

  padding: 0.5rem 0;

  font-size: 1rem;

  cursor: pointer;

  font-weight: 700;

  transition: none;

  &[data-state="active"] {
    color: initial;
    background-color: transparent;

    border-bottom: 2px solid hsl(var(--color-twitch-orange-11));
  }
`

export const FormLayoutWrapper = styled(TabsContent)`
  margin: 2.5rem 0 0;
`

export const FormLayoutContainer = styled(CardContent)`
  padding: 0;
`
