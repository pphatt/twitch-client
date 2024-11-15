import Link from "next/link"
import styled from "styled-components"

export const MainLayoutWrapper = styled.main`
  position: relative;

  display: flex;
  flex-direction: column;
  flex-grow: 1;

  width: 100%;
  height: 100%;

  overflow: hidden;

  z-index: 1;
`

export const LayoutHeaderContainer = styled.div`
  padding-top: 10px;
  padding-right: 10px;
  padding-left: 10px;
`

export const LayoutHeaderWrapper = styled.div`
  container-type: inline-size;

  @container (min-width: ${"480px"}) {
    ${LayoutHeaderContainer} {
      padding-top: 30px;
      padding-right: 30px;
      padding-left: 30px;
    }
  }
`

export const LayoutHeaderOverlay = styled.div`
  margin-bottom: 10px;
`

export const LayoutHeaderText = styled.h2`
  font-size: 36px;
  line-height: 1.2;
  font-weight: 700;
`

export const LinkListWrapper = styled.div`
  position: relative;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  height: 30px;

  border-bottom: 1px solid hsla(var(--color-opac-gd-2));
`

export const LinkListContainer = styled.ul`
  display: inline-grid;
  grid-auto-flow: column;
  align-items: center;

  height: 100%;

  font-size: 18px;

  overflow-x: auto;

  scrollbar-width: none;
`

export const LinkItemWrapper = styled.li<{
  $active: boolean
}>`
  justify-content: center;
  align-items: center;
  flex-grow: 0;

  color: ${({ $active }) =>
    $active ? "hsl(var(--color-twitch-orange-11))" : "hsl(var(--foreground))"};

  height: calc(100% - 4px);

  padding: 2px;
`

export const LinkItemContainer = styled(Link)`
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

export const LinkItemOverlay = styled.div<{
  $paddingBoth?: boolean
}>`
  display: flex;
  flex-direction: column;

  padding-right: 10px;
  ${({ $paddingBoth = false }) => $paddingBoth && "padding-left: 10px"};

  font-weight: 400;

  text-align: left;
`

export const LinkItemTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-grow: 1;

  height: 100%;

  font-weight: 400;

  white-space: nowrap;
`

export const LinkItemText = styled.div`
  font-size: 14px;
  line-height: 1.2;
  font-weight: 600;
`

export const UnderlineWrapper = styled.div<{
  $paddingBoth?: boolean
}>`
  position: relative;
  bottom: -2px;

  flex-grow: 0;

  width: 100%;
  height: 0.2rem;

  padding-right: 10px;
  ${({ $paddingBoth = false }) => $paddingBoth && "padding-left: 10px"};
`

export const Underline = styled.div`
  height: 0.2rem;
  transition: transform 0.2s;
  transform: none;
  transform-origin: 0 0;
  background-color: currentcolor;
`
