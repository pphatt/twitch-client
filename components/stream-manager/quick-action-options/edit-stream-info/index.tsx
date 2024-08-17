import * as React from "react"

import { Icons } from "@/components/icons"
import {
  BtnIconContainer,
  BtnIconFigure,
  BtnIconWrapper,
  BtnInnerLayoutWrapper,
  EditStreamInfoBtn,
  EditStreamText,
  EditStreamTextContainer,
  EditStreamTextOverlay,
  EditStreamTextWrapper,
} from "@/components/stream-manager/quick-action-options/edit-stream-info/style"
import {
  QuickActionBtnContainer,
  QuickActionBtnOverlay,
  QuickActionBtnWrapper,
} from "@/components/stream-manager/quick-action-options/style"

export default function EditStreamInfo() {
  return (
    <QuickActionBtnWrapper>
      <QuickActionBtnContainer>
        <QuickActionBtnOverlay>
          <EditStreamInfoBtn
            style={{
              animationDelay: "-0.331355s",
            }}
          >
            <BtnInnerLayoutWrapper>
              <BtnIconWrapper>
                <BtnIconContainer>
                  <BtnIconFigure>
                    <Icons.pen />
                  </BtnIconFigure>
                </BtnIconContainer>
              </BtnIconWrapper>

              <EditStreamTextWrapper>
                <EditStreamTextContainer>
                  <EditStreamTextOverlay>
                    <EditStreamText>Edit Stream Info</EditStreamText>
                  </EditStreamTextOverlay>
                </EditStreamTextContainer>
              </EditStreamTextWrapper>
            </BtnInnerLayoutWrapper>
          </EditStreamInfoBtn>
        </QuickActionBtnOverlay>
      </QuickActionBtnContainer>
    </QuickActionBtnWrapper>
  )
}
