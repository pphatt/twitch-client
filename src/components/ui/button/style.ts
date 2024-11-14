import styled, { css } from "styled-components"

export const buttonSizeStyled = {
  small: css`
    height: 2.5rem;
    padding: 0.5rem 1rem;
  `,
  default: css`
    height: 2.5rem;

    padding-left: 0.75rem;
    padding-right: 0.75rem;
    border-radius: 0.375rem;
  `,
  large: css`
    padding-left: 2rem;
    padding-right: 2rem;
    height: 2.5rem;
    border-radius: 0.375rem;
  `,
  icon: css`
    width: 2.5rem;
    height: 2.5rem;
  `,
  custom: css``,
}

export const buttonVariantStyled = {
  default: css`
    color: hsl(var(--primary-foreground));
    background-color: hsl(var(--primary));

    border-radius: calc(0.5rem - 2px);

    &:hover {
      background-color: hsl(var(--primary) / 0.9);
    }
  `,
  secondary: css`
    color: hsl(var(--secondary-foreground));
    background-color: hsl(var(--secondary));

    border-radius: calc(0.5rem - 2px);

    &:hover {
      background-color: hsl(var(--secondary) / 0.8);
    }
  `,
  destructive: css`
    color: hsl(var(--destructive-foreground));
    background-color: hsl(var(--destructive));

    border-radius: calc(0.5rem - 2px);

    &:hover {
      background-color: hsl(var(--destructive) / 0.9);
    }
  `,
  outline: css`
    background-color: hsl(var(--background));

    border-color: hsl(var(--input));
    border-width: 1px;
    border-radius: calc(0.5rem - 2px);

    &:hover {
      color: hsl(var(--accent-foreground));
      background-color: hsl(var(--accent));
    }
  `,
  ghost: css`
    border-radius: calc(0.5rem - 2px);

    &:hover {
      color: hsl(var(--accent-foreground));
      background-color: hsl(var(--accent));
    }
  `,
  link: css`
    color: hsl(var(--primary));
    background-color: transparent;

    border-radius: calc(0.5rem - 2px);

    text-underline-offset: 4px;

    &:hover {
      text-decoration-line: underline;
    }
  `,
  custom: css``,
}

export interface StyledButtonProps {
  $variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | "custom"
  $size?: "small" | "default" | "large" | "icon" | "custom"
}

export const DefaultStyledButton = styled.button<StyledButtonProps>`
  ${({ $size = "default" }) => buttonSizeStyled[$size]};
  ${({ $variant = "default" }) => buttonVariantStyled[$variant]};
`

export const StyledButton = styled(DefaultStyledButton)`
    display: inline-flex;
    justify-content: center;
    align-items: center;

    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.25rem;

    cursor: pointer;

    transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 0.15s;

    &[disabled] {
        opacity: 0.5;
        //pointer-events: none;
        cursor: not-allowed;
    }

    &:focus-visible {
        outline: 2px solid transparent;
        outline-offset: 2px;

        box-shadow: 0 0 0 2px hsl(var(--background)), 0 0 0 4px hsl(var(--ring)),
        0 0 #000;
`
