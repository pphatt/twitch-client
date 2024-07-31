import styled from "styled-components"

export const CardWrapper = styled.div`
  color: hsl(var(--card-foreground));
  background-color: hsl(var(--card));

  border-width: 1px;
  border-radius: 0.5rem;

  width: 350px;

  box-shadow:
    0 0 #000,
    0 0 #000,
    0 1px 2px 0 rgba(0, 0, 0, 0.05);
`

export const CardHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1.5rem;
`

export const CardTitleWrapper = styled.h3`
  font-size: 1.25rem;
  line-height: 1;
  font-weight: 600;

  letter-spacing: -0.025em;
`

export const CardDescriptionWrapper = styled.p`
  color: hsl(var(--muted-foreground));

  margin-top: 8px;

  font-size: 0.875rem;
  line-height: 1.25rem;
`

export const CardContentWrapper = styled.div`
  padding: 0 1.5rem 1.5rem 1.5rem;
`

export const CardFooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 1.5rem 1.5rem 1.5rem;
`
