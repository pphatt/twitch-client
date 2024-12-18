import Link from "next/link"
import styled from "styled-components"

export const TagsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.375rem;

  width: 100%;
  height: 1.25rem;

  margin-top: 5px;

  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 600;

  overflow: hidden;
`

export const TagWrapper = styled(Link)`
  display: block;
  flex-shrink: 0;

  color: rgb(168 177 184);
  background-color: rgb(23 28 30);

  height: 1.25rem;

  border-radius: 9999px;

  padding: 0.125rem 0.5rem;
  margin-bottom: 5px;

  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 600;

  cursor: pointer;

  user-select: none;

  transition-duration: 0.2s;
  transition-timing-function: cubic-bezier(0, 0, 0, 1);
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke;

  &:hover {
    color: rgb(209 213 219);
    background-color: rgb(34 41 44);
  }
`
