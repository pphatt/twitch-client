import styled, { css } from "styled-components"

export const CardSkeletonWrapper = styled.div`
  flex: 1 0 auto;

  max-width: 100%;
  width: 12rem;

  padding: 0 5px;
`

export const CardSkeletonContainer = styled.div`
  position: relative;

  padding-bottom: 10px;
  margin-bottom: 20px;
`

export const CardImageSkeletonWrapper = styled.div`
  position: relative;

  width: 100%;

  margin-bottom: 5px;

  overflow: hidden;
`

export const CardImageSkeletonOverlay = styled.div`
  padding-bottom: 133.333%;
`

export const CardImageSkeletonContainer = styled.span`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  min-height: 100%;
`

const shareCss = css`
  &:before {
    display: block;

    background-color: rgba(83, 83, 95, 0.38);

    width: 100%;
    max-width: 100%;
    height: 100%;
    min-height: calc(1em);

    border-radius: calc(var(--radius) - 2px);

    content: "";
  }
`

export const ImageSkeleton = styled.span`
  display: flex;
  align-items: center;

  max-width: 100%;
  width: 100%;
  height: 100%;
  min-height: 1.7em;

  ${shareCss}
`

export const NameSkeletonWrapper = styled.span`
  display: flex;
  align-items: center;

  max-width: 100%;
  width: 150px;
  height: 100%;
  min-height: 1.7em;

  ${shareCss}
`

export const ViewSkeletonWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 100%;
  width: 100px;
  height: 100%;
  min-height: 1.7em;

  padding-bottom: 20px;

  ${shareCss}
`
