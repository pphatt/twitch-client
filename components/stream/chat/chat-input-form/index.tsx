import * as React from "react"

import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Icons } from "@/components/icons"
import ChatInput from "@/components/stream/chat/chat-input"
import {
  ChatActionSectionContainer,
  ChatActionSectionWrapper,
  ChatButton,
  ChatButtonContainer,
  ChatButtonWrapper,
  ChatInputContainer,
  ChatInputInnerContainer,
  ChatInputInnerWrapper,
  ChatInputLayout,
  ChatInputLayoutContainer,
  ChatInputLayoutWrapper,
  ChatInputWrapper,
  ChatSettingButton,
  ChatSettingWrapper,
  InnerChatButton,
  InnerChatSettingButtonContainer,
  InnerChatSettingButtonWrapper,
} from "@/components/stream/chat/chat-input-form/style"
import UserChatSetting from "@/components/stream/chat/user-chat-setting"

interface ChatInputProps {
  message: string
  setMessage: (message: string) => void
  onSubmit: () => void

  popout: boolean

  isCreator: boolean
}

export default function ChatInputForm({
  message,
  setMessage,
  onSubmit,
  popout,
  isCreator,
}: ChatInputProps) {
  const handleSubmit = () => {
    if (!message) return

    onSubmit()
  }

  return (
    <ChatInputWrapper>
      <div></div>

      <div>
        <ChatInputContainer>
          <ChatInputLayoutWrapper>
            <ChatInputLayoutContainer>
              <ChatInputLayout>
                <ChatInputInnerWrapper>
                  <ChatInputInnerContainer>
                    <ChatInput
                      message={message}
                      setMessage={setMessage}
                      submit={handleSubmit}
                    />
                  </ChatInputInnerContainer>
                </ChatInputInnerWrapper>
              </ChatInputLayout>
            </ChatInputLayoutContainer>
          </ChatInputLayoutWrapper>
        </ChatInputContainer>

        <ChatActionSectionWrapper>
          <ChatActionSectionContainer>
            <ChatSettingWrapper>
              <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild>
                  <ChatSettingButton>
                    <InnerChatSettingButtonWrapper>
                      <InnerChatSettingButtonContainer>
                        <Icons.settings />
                      </InnerChatSettingButtonContainer>
                    </InnerChatSettingButtonWrapper>
                  </ChatSettingButton>
                </DropdownMenuTrigger>

                <UserChatSetting popout={popout} isCreator={isCreator} />
              </DropdownMenu>
            </ChatSettingWrapper>

            <ChatButtonWrapper>
              <ChatButtonContainer>
                <ChatButton onClick={handleSubmit}>
                  <InnerChatButton>Chat</InnerChatButton>
                </ChatButton>
              </ChatButtonContainer>
            </ChatButtonWrapper>
          </ChatActionSectionContainer>
        </ChatActionSectionWrapper>
      </div>
    </ChatInputWrapper>
  )
}
