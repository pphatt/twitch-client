import styled, { css } from "styled-components"

export const badgeVariants = {
  default: css`
    color: hsl(var(--primary-foreground));
    background-color: hsl(var(--primary));

    border-color: transparent;

    &:hover {
      background-color: hsl(var(--primary) / 0.8);
    }
  `,
  secondary: css`
    color: hsl(var(--secondary-foreground));
    background-color: hsl(var(--secondary));

    border-color: transparent;

    &:hover {
      background-color: hsl(var(--secondary) / 0.8);
    }
  `,
}

export interface StyledBadgeProps {
  $variant?: "default" | "secondary"
}

export const DefaultStyledBadge = styled.div<StyledBadgeProps>`
  ${({ $variant = "default" }) => badgeVariants[$variant]};
`

export const StyledBadge = styled(DefaultStyledBadge)`
  display: inline-flex;
  align-items: center;

  border-width: 1px;
  border-radius: 9999px;
  padding: 0.125rem 0.625rem;

  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 600;

  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;
`
