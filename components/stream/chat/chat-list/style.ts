import styled from "styled-components"

export const ChatListComp = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  overflow: hidden;
`

export const ChatListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  overflow: hidden;
`

export const ChatLineWrapper = styled.div`
  position: relative;
`

export const ChatLineContainer = styled.div`
  position: relative;

  z-index: 10;

  span {
    font-size: 13px;
  }
`
