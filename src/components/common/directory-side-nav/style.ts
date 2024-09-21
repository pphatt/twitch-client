import Link from "next/link"
import styled from "styled-components"

export const LayoutHeader = styled.div`
  margin-top: 30px;

  h1 {
    font-size: 54px;
    line-height: 1.2;
    font-weight: 700;
  }
`

export const LayoutSideSection = styled.div`
  justify-content: space-between;
  align-items: center;

  width: 100%;

  padding-top: 20px;
`

export const NavigationWrapper = styled.div`
  padding-bottom: 20px;
`

export const NavigationContainer = styled.div`
  position: relative;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  height: 40px;
`

export const NavigationList = styled.ul`
  display: inline-grid;
  grid-auto-flow: column;
  align-items: center;

  gap: 20px;

  height: 100%;

  font-size: 18px;

  overflow-x: auto;

  scrollbar-width: none;
`

export const ListItem = styled.li`
  height: calc(100% - 4px);

  padding: 2px;

  &[data-selected="true"] {
    color: hsl(var(--color-twitch-orange-11));
  }
`

export const ListItemLinkWrapper = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  color: inherit;

  width: 100%;
  height: 100%;
  min-height: 100%;

  padding: 1px;

  line-height: 1;
`

export const ListItemText = styled.p`
  font-size: 18px;
  line-height: 1.2;
  font-weight: 600;
`

export const ListItemUnderlineWrapper = styled.div`
  position: relative;
  bottom: -2px;

  flex-grow: 0;

  width: 100%;
  height: 2px;
`

export const ListItemUnderline = styled.div`
  background-color: currentcolor;

  height: 2px;

  transform: none;
  transform-origin: 0 0;
  transition: transform 0.2s ease 0s;
`

export const OptionWrapper = styled.section`
  display: block;
`

export const OptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  width: 100%;
`

export const SortByOptionsWrapper = styled.div``
