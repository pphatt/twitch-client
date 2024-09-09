import * as React from "react"
import EditFormGroup from "components/stream-manager/quick-action-options/common/edit/form-group"

import { Dialog, DialogHeader, DialogTrigger } from "@/components/ui/dialog"
import { Icons } from "@/components/icons"
import SimpleBar from "@/components/simplebar"
import FormSubmitButton from "@/components/stream-manager/quick-action-options/common/edit/form-submit-btn"
import FormTextarea from "@/components/stream-manager/quick-action-options/common/edit/form-textarea"
import FormLabel from "@/components/stream-manager/quick-action-options/common/edit/form-title"
import {
  BtnIconContainer,
  BtnIconFigure,
  BtnIconWrapper,
  BtnInnerLayoutWrapper,
  ContentContainer,
  ContentWrap,
  DialogContentWrapper as DialogContent,
  DialogContentContainer,
  DialogContentOverlay,
  DialogTitleContainer as DialogTitle,
  DialogTitleWrapper,
  EditContentContainer,
  EditContentOverlay,
  EditContentWrapper,
  EditStreamInfoBtn,
  EditStreamText,
  EditStreamTextContainer,
  EditStreamTextOverlay,
  EditStreamTextWrapper,
} from "@/components/stream-manager/quick-action-options/edit-stream-info/style"
import styled from "@/components/stream-manager/quick-action-options/edit-stream-info/style.module.scss"
import {
  QuickActionBtnContainer,
  QuickActionBtnOverlay,
  QuickActionBtnWrapper,
} from "@/components/stream-manager/quick-action-options/style"

export default function EditStreamInfo() {
  const [open, setOpen] = React.useState(false)

  const [titleText, setTitleText] = React.useState("")

  return (
    <QuickActionBtnWrapper>
      <QuickActionBtnContainer>
        <QuickActionBtnOverlay>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
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
            </DialogTrigger>

            <DialogContent>
              <ContentWrap
                style={{
                  maxWidth: "600px",
                  width: "100vw",
                  maxHeight: "100vh",
                  height: "auto",
                  pointerEvents: "all",
                }}
              >
                <ContentContainer>
                  <DialogHeader>
                    <DialogTitleWrapper>
                      <DialogTitle>Edit Stream Info</DialogTitle>
                    </DialogTitleWrapper>
                  </DialogHeader>

                  <DialogContentContainer>
                    <DialogContentOverlay>
                      <SimpleBar
                        className={styled["edit-broadcast-scrollable"]}
                      >
                        <EditContentWrapper>
                          <EditContentContainer>
                            <EditContentOverlay>
                              <EditFormGroup>
                                <FormLabel
                                  id={"edit-broadcast-title-formgroup-label"}
                                  htmlFor={"edit-broadcast-title-formgroup"}
                                >
                                  Title
                                </FormLabel>

                                <FormTextarea
                                  state={titleText}
                                  setState={setTitleText}
                                  id={"edit-broadcast-title-formgroup"}
                                  placeholder={"Enter a title"}
                                  maxLength={140}
                                  minRows={3}
                                />
                              </EditFormGroup>

                              <EditFormGroup>
                                <FormLabel>Category</FormLabel>

                                <FormTextarea
                                  state={titleText}
                                  setState={setTitleText}
                                  placeholder={"Enter a title"}
                                  maxLength={140}
                                  minRows={3}
                                />
                              </EditFormGroup>

                              <EditFormGroup>
                                <FormLabel>Tags</FormLabel>
                                <FormTextarea
                                  state={titleText}
                                  setState={setTitleText}
                                  placeholder={"Enter a title"}
                                  maxLength={140}
                                  minRows={3}
                                />
                              </EditFormGroup>

                              <EditFormGroup>
                                <FormLabel>Stream Language</FormLabel>
                                <FormTextarea
                                  state={titleText}
                                  setState={setTitleText}
                                  placeholder={"Enter a title"}
                                  maxLength={140}
                                  minRows={3}
                                />
                              </EditFormGroup>
                            </EditContentOverlay>
                          </EditContentContainer>
                        </EditContentWrapper>
                      </SimpleBar>

                      <FormSubmitButton
                        state={open}
                        setState={setOpen}
                        onSubmit={() => {}}
                      />
                    </DialogContentOverlay>
                  </DialogContentContainer>
                </ContentContainer>
              </ContentWrap>
            </DialogContent>
          </Dialog>
        </QuickActionBtnOverlay>
      </QuickActionBtnContainer>
    </QuickActionBtnWrapper>
  )
}
