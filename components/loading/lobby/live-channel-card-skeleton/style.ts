import styled, { css } from "styled-components"

export const CardSkeletonWrapper = styled.div`
  flex: 1 0 auto;

  max-width: 100%;
  width: 30rem;

  padding: 0 5px;
`

export const CardSkeletonContainer = styled.div`
  display: flex;
  flex-flow: column;
`

export const CardImageSkeletonWrapper = styled.div`
  position: relative;

  width: 100%;

  overflow: hidden;
`

export const CardImageSkeletonOverlay = styled.div`
  padding-bottom: 56.25%;
`

export const CardImageSkeletonContainer = styled.span`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  min-height: 100%;
`

export const ImageSkeleton = styled.span`
  display: flex;
  align-items: center;

  max-width: 100%;
  width: 100%;
  height: 100%;
  min-height: 1.7em;

  &:before {
    display: block;

    background-color: rgba(83, 83, 95, 0.38);

    width: 100%;
    max-width: 100%;
    min-height: calc(1em);
    height: 100%;

    border-radius: calc(var(--radius) - 2px);

    content: "";
  }
`

export const DescriptionSkeletonWrapper = styled.div`
  position: relative;
`

export const DescriptionSkeletonContainer = styled.div`
  display: flex;

  margin-bottom: 20px;
`

export const AvatarSkeletonWrapper = styled.div`
  display: inline-block;

  height: 40px;

  border-radius: 9999px;

  margin-top: 10px;
  margin-right: 10px;
  margin-bottom: 5px;

  overflow: hidden;
`

export const AvatarSkeletonContainer = styled.span`
  display: flex;
  align-items: center;

  max-width: 100%;
  width: 40px;
  height: 40px;
  min-height: 0;

  &:before {
    display: block;

    background-color: rgba(83, 83, 95, 0.38);

    width: 100%;
    max-width: 100%;
    height: 100%;
    min-height: 0;

    border-radius: calc(var(--radius) - 2px);

    content: "";
  }
`

export const ContentSkeletonWrapper = styled.div`
  display: inline-block;
  margin-top: 10px;
`

export const ContentSkeletonContainer = styled.p`
  font-size: 13px;
  line-height: 1.5;
`

export const shareCss = css`
  display: flex;
  align-items: center;

  max-width: 100%;
  height: 100%;
  min-height: 1.7em;

  &:before {
    display: block;

    background-color: rgba(83, 83, 95, 0.38);

    max-width: 100%;
    width: 100%;
    height: 100%;
    min-height: calc(1em);

    border-radius: calc(var(--radius) - 2px);

    content: "";
  }
`

export const TitleSkeletonWrapper = styled.span`
  ${shareCss};

  width: 150px;
`

export const ContentSmallerSkeletonContainer = styled(ContentSkeletonContainer)`
  font-size: 12px;
`

export const CommonSkeletonWrapper = styled.span`
  ${shareCss};

  width: 100px;
`
