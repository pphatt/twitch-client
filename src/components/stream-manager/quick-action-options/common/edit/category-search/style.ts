import styled from "styled-components"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Icons } from "@/components/icons"

export const Wrapper = styled.div`
  position: relative;

  width: 100%;
`

export const CategorySearchLayoutWrapper = styled.div`
  position: relative;
`

export const SearchIconLayoutWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #adadb8;

  min-width: 30px;
  height: 100%;
`

export const SearchIconLayoutContainer = styled.div`
  display: inline-flex;
  align-items: center;

  width: 20px;
  height: 20px;

  fill: currentColor;
`

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
export const SearchIcon = styled(Icons.categorySearch)`
  width: 20px;
  height: 20px;
`

export const SearchInput = styled(Input)`
  display: flex;

  color: #efeff1;
  background-color: #18181b;
  background-clip: padding-box;

  max-width: 100%;
  width: 100%;
  height: 30px;

  border: none;
  border-radius: 4px;

  padding: 5px 10px 5px 30px !important;

  font-size: 13px;
  line-height: 1.5;
  font-weight: 400;

  appearance: none;

  box-shadow: inset 0 0 0 1px rgba(222, 222, 227, 0.4);

  transition:
    border 100ms ease-in,
    background-color 100ms ease-in;
`

export const CategoryDetailsWrapper = styled.div`
  display: block;
`

export const CategoryDetailsContainer = styled.div`
  background-color: #1f1f23;

  border-radius: 4px;
  border-top: 1px solid rgba(83, 83, 95, 0.48);
  border-right: 1px solid rgba(83, 83, 95, 0.48);
  border-bottom: 1px solid rgba(83, 83, 95, 0.48);
  border-left: 1px solid rgba(83, 83, 95, 0.48);

  margin-bottom: 5px;
`

export const CategoryDetailsOverlay = styled.div`
  display: flex;
  flex-wrap: nowrap;
`

export const CategoryDetailsContentWrapper = styled.div`
  order: 2;

  flex-grow: 1;
  flex-shrink: 1;

  width: 100%;
  min-width: 0;
`

export const CategoryDetailsContentContainer = styled.div`
  margin-bottom: 3px;
`

export const CategoryDetailsContentOverlay = styled.div`
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 10px;
  margin-bottom: 5px;
`

export const CategoryDetailsContentText = styled.p`
  max-width: 210px;

  font-size: 14px;
  line-height: 1.2;
  font-weight: 600;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap !important;
`

export const CategoryDetailsImageWrapper = styled.div`
  order: 1;

  flex: 0 0 40px;

  margin-right: 10px;
`

export const CategoryDetailsImageContainer = styled.div`
  position: relative;

  display: flex;
  align-items: stretch;
`

export const CategoryDetailsImageOverlay = styled.div`
  width: 60px;
`

export const CategoryDetailsImageInnerWrapper = styled.div`
  position: relative;

  color: #fff;
`

export const CategoryDetailsImageInnerContainer = styled.div`
  position: relative;

  width: 100%;

  overflow: hidden;
`

export const CategoryDetailsImagePlaceholder = styled.div`
  padding-bottom: 133.333%;
`

export const CategoryDetailsImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  min-height: 100%;

  border-radius: 4px 0 0 4px;
`

export const RemoveCurrentCategoryWrapper = styled.div`
  order: 3;

  flex-grow: 0;
  flex-shrink: 0;

  margin-top: -3px;
`

export const RemoveCurrentCategoryButtonWrapper = styled(Button)`
  color: #efeff1;
  background-color: transparent;

  width: 30px;
  height: 30px;

  padding: 0;

  font-size: 13px;
  font-weight: 600;

  border-radius: 4px;

  user-select: none;

  overflow: hidden;
  text-decoration: none;
  white-space: nowrap;

  vertical-align: middle;
`

export const RemoveCurrentCategoryButtonContainer = styled.div`
  width: 20px;
  height: 20px;

  pointer-events: none;
`

export const RemoveCurrentCategoryButtonOverlay = styled.div`
  display: inline-flex;
  align-items: center;

  width: 100%;
  height: 100%;

  fill: currentColor;

  svg {
    width: 100%;
    height: 100%;
  }
`

export const SearchResultLayoutWrapper = styled.div`
  display: block;
`

export const SearchResultLayoutContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;

  margin-top: 8px;

  z-index: 2000;
`

export const SearchResultLayoutOverlay = styled.div`
  display: inline-block;

  color: inherit;
  background-color: #1f1f23;

  max-width: 90vw;
  min-width: 360px;

  border-radius: 6px;

  box-shadow:
    0 4px 8px rgba(0, 0, 0, 0.4),
    0 0 4px rgba(0, 0, 0, 0.4);
`

export const ResultItemButton = styled.button`
  display: block;

  background: none;

  width: 100%;

  border: none;
  border-radius: 0;
`

export const ResultItemContentWrapper = styled.div`
  display: flex;

  background-color: #1f1f23;

  border-bottom: 1px solid rgba(83, 83, 95, 0.48);

  padding: 0.5rem;
`

export const ResultItemImage = styled.img`
  flex-shrink: 0;
  flex-grow: 0;

  height: 70px;
`

export const ResultItemInfoWrapper = styled.div`
  padding-left: 10px;
`

export const ResultItemTitle = styled.p`
  font-size: 13px;
  line-height: 1.5;
  font-weight: 600;
`

export const NoResultWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #1f1f23;

  width: 100%;

  padding: 10px;
`
