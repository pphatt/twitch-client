"use client"

import * as React from "react"
import { DEFAULT_LAYOUT } from "src/constants"
import {
  useEditLayout,
  useEditLayoutState,
  useTempNodeLayout,
} from "@/store/state/dashboard.state"
import isEqual from "lodash/isEqual"
import type { MosaicNode } from "react-mosaic-component"
import { toast } from "sonner"

import { useLocalStorage } from "@/hooks/useLocalStorage.hooks"
import { useMosaicUpdateLayout } from "@/hooks/useMosaicUpdateLayout.hooks"
import ToastSuccess from "@/components/custom-toast/toast-success"
import {
  CancelChangeBtn,
  CancelChangeBtnContainer,
  CancelChangeBtnText,
  CancelChangeBtnWrapper,
  CancelChangeWrapper,
  LayoutWrapper,
} from "@/components/layouts/dashboard/dashboard-save-change/style"

export default function DashboardSaveChange() {
  const { isEditing, setIsEditing } = useEditLayout()

  const [lcLayout, setLcLayout] = useLocalStorage<MosaicNode<string> | null>({
    key: "stream-manager-drag-and-drop-layout",
  })

  const { setLayout, debounceUpdateLayout } = useMosaicUpdateLayout()

  const { tempNodeLayout } = useTempNodeLayout()

  const { editLayout } = useEditLayoutState()

  /*
   * this useEffect does as cache local storage data when editing the ui
   * this only cache when user starts editing
   * */
  React.useEffect(() => {
    const localStorageValue = window["localStorage"].getItem(
      "stream-manager-drag-and-drop-layout"
    )

    let parsedValue: MosaicNode<string> = DEFAULT_LAYOUT

    if (localStorageValue) {
      parsedValue = JSON.parse(localStorageValue) as MosaicNode<string>
    }

    setLcLayout(parsedValue)
  }, [isEditing])

  /*
   * check does the ui change or not
   * */
  const isChangesHappened = React.useMemo(
    () => isEqual(tempNodeLayout, editLayout),
    [tempNodeLayout, editLayout]
  )

  if (!isEditing) return null

  return (
    <LayoutWrapper>
      <CancelChangeWrapper>
        <CancelChangeBtn
          onClick={() => {
            setLayout(lcLayout)
            setIsEditing(!isEditing)
          }}
        >
          <CancelChangeBtnWrapper>
            <CancelChangeBtnContainer>
              <CancelChangeBtnText>Cancel Changes</CancelChangeBtnText>
            </CancelChangeBtnContainer>
          </CancelChangeBtnWrapper>
        </CancelChangeBtn>
      </CancelChangeWrapper>

      <CancelChangeWrapper>
        <CancelChangeBtn
          disabled={isChangesHappened}
          onClick={() => {
            debounceUpdateLayout(editLayout, () => {
              toast.custom(() => <ToastSuccess>Layout 1 updated</ToastSuccess>)
            })
            setIsEditing(!isEditing)
          }}
        >
          <CancelChangeBtnWrapper>
            <CancelChangeBtnContainer>
              <CancelChangeBtnText>Save Layout Changes</CancelChangeBtnText>
            </CancelChangeBtnContainer>
          </CancelChangeBtnWrapper>
        </CancelChangeBtn>
      </CancelChangeWrapper>
    </LayoutWrapper>
  )
}
