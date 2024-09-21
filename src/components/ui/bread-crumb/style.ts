import { Slot } from "@radix-ui/react-slot"
import styled from "styled-components"

export const BreadcrumbWrapper = styled.nav``

export const BreadcrumbListWrapper = styled.ol`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.375rem;

  color: hsl(var(--muted-foreground));

  font-size: 0.875rem;
  line-height: 1.25rem;

  overflow-wrap: break-word;

  @media (min-width: 640px) {
    gap: 0.625rem;
  }
`

export const BreadcrumbItemWrapper = styled.li`
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
`

export const BreadcrumbLinkWrapper = styled.a`
  transition-duration: 0.15s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke;

  &:hover {
    color: hsl(var(--foreground));
  }
`

export const BreadcrumbLinkSlotWrapper = styled(Slot)`
  ${BreadcrumbLinkWrapper}
`

export const BreadcrumbPageWrapper = styled.span`
  color: hsl(var(--foreground));

  font-weight: 400;
`

export const BreadcrumbSeparatorWrapper = styled.li`
  svg {
    width: 0.875rem;
    height: 0.875rem;
  }
`

export const BreadcrumbEllipsisWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 1rem;
  height: 1rem;

  svg {
    width: 1rem;
    height: 1rem;
  }

  span {
    position: absolute;

    width: 1px;
    height: 1px;

    border-width: 0;

    padding: 0;
    margin: -1px;

    overflow: hidden;

    clip: rect(0, 0, 0, 0);

    white-space: nowrap;
  }
`
