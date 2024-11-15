import styled from "styled-components"

import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { DialogPrimitiveContent } from "@/components/ui/dialog/style"

export const CardHeaderWrapper = styled.div`
  margin-bottom: 20px;
`

export const CardHeaderText = styled.h3`
  color: hsl(var(--foreground-alt));

  font-size: 18px;
  line-height: 1.2;
  font-weight: 600;
`

export const CardLayoutWrapper = styled.div`
  background-color: hsl(var(--background));

  border: 1px solid hsla(var(--color-opac-gd-2));
  border-radius: 4px;

  margin-bottom: 40px;
`

export const CardLayoutContainer = styled.div`
  width: 100%;

  padding: 20px;
`

export const CardContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const ModalWrapper = styled(DialogPrimitiveContent)`
  display: flex !important;
  align-content: flex-start;
  flex-direction: column;

  gap: 1.75rem !important;

  width: 100vw;
  max-height: 100vh;
  height: 100vh;

  border: 0 !important;

  padding: 0 !important;

  overflow: hidden;

  animation-duration: 0.2s !important;

  @supports (height: 100dvh) {
    height: 100dvh;
  }

  @supports (max-height: 100dvh) {
    max-height: 100dvh;
  }

  @supports (width: 100dvw) {
    width: 100dvw;
  }

  @media (min-width: 1024px) {
    max-width: 600px;
    width: 600px;
    max-height: 90vh;
    height: auto;

    padding: 1.5rem;
  }

  @supports (height: 100dvh) {
    @media (min-width: 1024px) {
      max-height: 90dvh;

      border-radius: 0.25rem;
    }
  }
`

export const ImageSettingsWrapper = styled.div`
  position: relative;

  margin-bottom: 20px;
`

export const CardLayoutOverlay = styled.div`
  container: profile-image-setting-container / inline-size;

  @container (min-width: ${"400px"}) {
    ${CardContentWrapper} {
      flex-direction: row;
    }

    ${ImageSettingsWrapper} {
      margin-right: 20px;
      margin-bottom: 0;
    }
  }
`

export const ImageSettingsContainer = styled(Avatar)`
  position: relative;

  flex-shrink: 0;

  background-color: inherit;

  width: 96px;
  max-height: 100%;
  height: 96px;

  border-radius: 9999px;

  overflow: hidden;
`

export const Image = styled(AvatarImage)`
  display: block;

  max-width: 100%;
  width: 100%;
  height: 100%;

  border: none;
  border-radius: 9999px;

  aspect-ratio: 1/1;

  vertical-align: top;

  object-fit: cover;
  object-position: top;
`

export const ImageUploadButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const ImageUploadButton = styled(Button)`
  position: relative;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  color: hsl(var(--foreground));
  background-color: hsla(var(--color-opac-gd-1));

  height: 30px;

  border-radius: 4px;

  padding: 0;

  font-size: 13px;
  font-weight: 600;

  overflow: hidden;
  text-decoration: none;
  white-space: nowrap;

  user-select: none;

  vertical-align: middle;

  cursor: pointer;

  &:hover {
    background-color: hsla(var(--color-opac-gd-2));
  }
`

export const ImageUploadButtonContainer = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 0;

  padding: 0 10px;
`

export const ImageUploadButtonOverlay = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 0;
`

export const ImageUploadButtonText = styled.div`
  padding-right: 10px;
  padding-left: 10px;
`

export const ImageInputContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
`

export const ImageSettingsDescriptionWrapper = styled.div`
  margin-top: 10px;
`

export const ImageSettingsDescriptionText = styled.p`
  color: hsl(var(--foreground-alt));
`
