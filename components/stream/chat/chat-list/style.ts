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

export const ChatLineNew = styled.div`
  display: flex;
  align-items: center;
`

export const SeparatorLine = styled.div`
  flex-grow: 1;

  margin-right: 10px;
`

export const ChatLineNewTextWrapper = styled.div`
  display: inline-flex;
`

export const ChatLineNewText = styled.span`
  color: #ff8280;

  font-size: 13px;
`
