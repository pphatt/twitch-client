import styled from "styled-components"

export const QuickActionPanelWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;
`

export const QuickActionPanelContainer = styled.div`
  position: relative;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(132px, 1fr));
  grid-gap: 10px;

  padding: 10px;
`
