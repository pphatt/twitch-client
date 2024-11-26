import * as React from "react"
import { axiosHttpErrorHandler } from "@/utils/common"
import { zodResolver } from "@hookform/resolvers/zod"
import { LivestreamRepository } from "@modules/user/infrastructure/repository/livestream.repository"
import {
  SetStreamInfoRequestDtoSchema,
  type SetStreamInfoRequestDto,
} from "@modules/user/presentation/http/dto/request/livestream/set-stream-info.request.dto"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

import { Dialog, DialogHeader, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormControl, FormField } from "@/components/ui/form"
import {
  FormMessage,
  FormMessageContainer,
  FormMessageWrapper,
} from "@/components/forms/dashboard/username-form/style"
import { Icons } from "@/components/icons"
import SimpleBar from "@/components/simplebar"
import { CategorySearch } from "@/components/stream-manager/quick-action-options/common/edit/category-search"
import EditFormGroup from "@/components/stream-manager/quick-action-options/common/edit/form-group"
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

type Inputs = SetStreamInfoRequestDto

interface EditStreamInfoProps {
  title: string | undefined
}

export default function EditStreamInfo({ title }: EditStreamInfoProps) {
  const [open, setOpen] = React.useState(false)
  const [isPending, startTransition] = React.useTransition()

  const form = useForm<Inputs>({
    resolver: zodResolver(SetStreamInfoRequestDtoSchema),
    mode: "onChange",
    defaultValues: {
      title: title ?? "",
      categoryId: "",
    },
  })

  React.useEffect(() => {
    if (open) {
      form.setValue("title", title ?? "")
    }
  }, [title, open])

  const onSubmit = (data: Inputs) => {
    if (isPending) return

    startTransition(async () => {
      try {
        await LivestreamRepository.setStreamInfo(data)

        toast.success("Update stream info successfully", {
          duration: 10000,
          position: "top-right",
        })

        setOpen(false)
        window.location.reload()
      } catch (err) {
        const error = axiosHttpErrorHandler(err)

        toast.error(error.message, {
          duration: 10000,
          position: "top-right",
        })

        console.log(error)
      }
    })
  }

  const handleOnCancel = () => {
    setOpen(!open)
    form.reset()
  }

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
                    <Form {...form}>
                      <DialogContentOverlay
                        onSubmit={(...args) =>
                          void form.handleSubmit(onSubmit)(...args)
                        }
                      >
                        <SimpleBar
                          forceShowXAxis={false}
                          forceVisible={"y"}
                          className={styled["edit-broadcast-scrollable"]}
                        >
                          <EditContentWrapper>
                            <EditContentContainer>
                              <EditContentOverlay>
                                <FormField
                                  control={form.control}
                                  name="title"
                                  render={({ field: { value, onChange } }) => (
                                    <EditFormGroup>
                                      <FormLabel
                                        id={
                                          "edit-broadcast-title-formgroup-label"
                                        }
                                        htmlFor={
                                          "edit-broadcast-title-formgroup"
                                        }
                                      >
                                        Title
                                      </FormLabel>

                                      <FormControl>
                                        <FormTextarea
                                          state={value}
                                          setState={onChange}
                                          id={"edit-broadcast-title-formgroup"}
                                          placeholder={"Enter a title"}
                                          maxLength={140}
                                          minRows={3}
                                        />
                                      </FormControl>

                                      <FormMessageWrapper
                                        style={{
                                          height: `${form.getFieldState("title").invalid ? `${23}px` : "0px"}`,
                                        }}
                                      >
                                        {form.getFieldState("title")
                                          .invalid && (
                                          <FormMessageContainer>
                                            <FormMessage>
                                              {
                                                form.getFieldState("title")
                                                  .error?.message
                                              }
                                            </FormMessage>
                                          </FormMessageContainer>
                                        )}
                                      </FormMessageWrapper>
                                    </EditFormGroup>
                                  )}
                                />

                                <FormField
                                  control={form.control}
                                  name="categoryId"
                                  render={({ field: { value, onChange } }) => (
                                    <EditFormGroup>
                                      <FormLabel>Category</FormLabel>

                                      <FormControl>
                                        <CategorySearch
                                          value={value}
                                          onChange={onChange}
                                        />
                                      </FormControl>

                                      <FormMessageWrapper
                                        style={{
                                          height: `${form.getFieldState("title").invalid ? `${23}px` : "0px"}`,
                                        }}
                                      >
                                        {form.getFieldState("title")
                                          .invalid && (
                                          <FormMessageContainer>
                                            <FormMessage>
                                              {
                                                form.getFieldState("title")
                                                  .error?.message
                                              }
                                            </FormMessage>
                                          </FormMessageContainer>
                                        )}
                                      </FormMessageWrapper>
                                    </EditFormGroup>
                                  )}
                                />
                              </EditContentOverlay>
                            </EditContentContainer>
                          </EditContentWrapper>
                        </SimpleBar>

                        <FormSubmitButton onCancel={handleOnCancel} />
                      </DialogContentOverlay>
                    </Form>
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
