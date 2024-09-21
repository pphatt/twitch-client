import * as AvatarPrimitive from "@radix-ui/react-avatar"
import styled from "styled-components"

export const AvatarPrimitiveRoot = styled(AvatarPrimitive.Root)`
  position: relative;

  display: flex;

  flex-shrink: 0;

  width: 2.5rem;
  height: 2.5rem;

  border-radius: 9999px;

  overflow: hidden;
`

export const AvatarPrimitiveImage = styled(AvatarPrimitive.Image)`
  max-width: 100%;

  width: 100%;
  height: 100%;

  aspect-ratio: 1/1;
`

export const AvatarPrimitiveFallback = styled(AvatarPrimitive.Fallback)`
  display: flex;
  justify-content: center;
  align-items: center;

  color: hsl(var(--muted-foreground));
  background-color: hsl(var(--muted));

  border-radius: 9999px;

  width: 100%;
  height: 100%;
`
