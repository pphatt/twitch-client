import styled, { css } from "styled-components"

const alertVariant = {
  default: css`
    color: hsl(var(--foreground));
    background-color: hsl(var(--background));
  `,
  destructive: css`
    color: hsl(var(--destructive));

    border-color: hsl(var(--destructive));

    svg {
      color: hsl(var(--destructive));
    }
  `,
}

export interface AlertVariantOption {
  $variant?: "default" | "destructive"
}

export const AlertWrapper = styled.div<AlertVariantOption>`
  ${({ $variant = "default" }) => alertVariant[$variant]};

  position: relative;

  width: 100%;

  border-width: 1px;
  border-radius: 0.5rem;

  padding: 0.75rem 1rem;

  font-size: 0.875rem;
  line-height: 1.25rem;

  svg {
    position: absolute;
    top: 1rem;
    left: 1rem;

    width: 1rem;
    height: 1rem;

    color: hsl(var(--foreground));
  }
`

export const AlertTitleWrapper = styled.h5`
  padding-left: 1.75rem;

  margin-bottom: 0.25rem;

  font-weight: 500;
  line-height: 1;

  letter-spacing: -0.025em;
`

export const AlertDescriptionWrapper = styled.div`
  padding-left: 1.75rem;

  font-size: 0.875rem;
  line-height: 1.25rem;
`
