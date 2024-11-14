import Link from "next/link"
import styled from "styled-components"

export const HeaderLayoutWrapper = styled.div`
  display: flex;
`

export const HeaderLayoutContainer = styled.div`
  width: 100%;
`

export const HeaderLayoutOverlay = styled.div`
  position: relative;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  height: 40px;
`

export const HeaderListItems = styled.ul`
  display: inline-grid;
  grid-auto-flow: column;
  align-items: center;

  height: 100%;

  font-size: 18px;

  overflow-x: auto;

  scrollbar-width: none;
`

export const HeaderListItemWrapper = styled.li`
  justify-content: center;
  align-items: center;
  flex-grow: 0;

  color: hsl(var(--color-twitch-orange-11));

  height: calc(100% - 4px);

  padding: 2px;

  list-style-position: inside;
`

export const HeaderListItemContainer = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  color: inherit;

  width: 100%;
  height: 100%;
  min-height: 100%;

  padding: 1px;

  line-height: 1;

  &:hover {
    color: hsl(var(--color-twitch-orange-12));
  }
`

export const HeaderListItemOverlay = styled.div`
  display: flex;
  flex-direction: column;

  padding-right: 10px;
  padding-left: 0;

  font-weight: 400;

  text-align: left;
`

export const HeaderListItemTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;

  height: 100%;

  font-weight: 400;

  white-space: nowrap;
`

export const HeaderListItemText = styled.div`
  font-size: 18px;
  line-height: 1.2;
  font-weight: 600;
`

export const UnderlineTextWrapper = styled.div`
  position: relative;
  bottom: -2px;

  flex-grow: 0;

  width: 100%;
  height: 2px;

  padding-right: 10px;
`

export const UnderlineTextContainer = styled.div`
  background-color: currentcolor;

  height: 2px;

  transition: transform 0.2s;
  transform: none;
  transform-origin: 0 0;
`
