import styled from "styled-components"

export const TableWrapper = styled.div`
  width: 100%;

  overflow: auto;
`

export const Table = styled.table`
  width: 100%;

  font-size: 0.875rem;
  line-height: 1.25rem;

  caption-side: bottom;
`

export const TableHeaderWrapper = styled.thead`
  tr {
    border-bottom-width: 1px;
  }
`

export const TableBodyWrapper = styled.tbody`
  tr {
    border-bottom-width: 1px;
  }

  tr:last-child {
    border-width: 0;
  }
`

export const TableFooterWrapper = styled.tfoot`
  color: hsl(var(--primary-foreground));
  background-color: hsl(var(--primary));

  font-size: 0.875rem;
  line-height: 1.25rem;
`

export const TableRowWrapper = styled.tr`
  border-bottom-width: 1px;

  transition-duration: 0.15s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke;

  &[data-state="selected"] {
    background-color: hsl(var(--muted));
  }

  &:hover {
    background-color: hsl(var(--muted) / 0.5);
  }
`

export const TableHeadWrapper = styled.th`
  color: hsl(var(--muted-foreground));

  height: 3rem;

  //optional
  //padding-left: 1rem;
  padding-left: 0.5rem;
  //padding-right: 1rem;
  padding-right: 0.5rem;

  font-weight: 500;

  text-align: left;

  vertical-align: middle;

  &:has(button[role="checkbox"]) {
    padding-right: 0;
  }
`

export const TableCellWrapper = styled.td`
  //optional
  padding: 0.5rem;
  //padding: 1rem;

  vertical-align: middle;

  &:has(button[role="checkbox"]) {
    padding-right: 0;
  }
`

export const TableCaptionWrapper = styled.caption`
  color: hsl(var(--muted-foreground));

  margin-top: 1rem;

  font-size: 0.875rem;
  line-height: 1.25rem;
`
