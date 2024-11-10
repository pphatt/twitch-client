import * as React from "react"
import { axiosHttpErrorHandler } from "@/utils/common"
import { Auth } from "@modules/core/presentation/endpoints/auth/auth.request"
import { toast } from "sonner"

import {
  ResendEmailConfirmButton,
  ResendEmailConfirmButtonContainer,
  ResendEmailConfirmButtonText,
  ResendEmailConfirmWrapper,
} from "@/components/forms/resend-otp-btn/style"

const DEFAULT_COUNT_DOWN_TIME = 30

interface ResendOtpButtonProps {
  username: string
}

export default function ResendOtpBtn({ username }: ResendOtpButtonProps) {
  const [time, setTime] = React.useState<number>(DEFAULT_COUNT_DOWN_TIME)
  const [click, setClick] = React.useState<boolean>(false)
  const [isPending, startTransition] = React.useTransition()

  React.useEffect(() => {
    let timer: NodeJS.Timeout

    if (click && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1)
      }, 1000)
    } else if (time === 0) {
      setClick(false)
      setTime(DEFAULT_COUNT_DOWN_TIME)
    }

    return () => clearInterval(timer)
  }, [click, time])

  const handleResendOtp = () => {
    startTransition(async () => {
      try {
        setClick(true)

        await Auth.resendConfirmEmail({
          name: username,
        })
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

  return (
    <ResendEmailConfirmWrapper>
      <ResendEmailConfirmButton
        onClick={handleResendOtp}
        disabled={click}
        type={"button"}
      >
        <ResendEmailConfirmButtonContainer>
          <ResendEmailConfirmButtonText>
            {click || isPending ? `Resend in ${time}s` : "Resend code"}
          </ResendEmailConfirmButtonText>
        </ResendEmailConfirmButtonContainer>
      </ResendEmailConfirmButton>
    </ResendEmailConfirmWrapper>
  )
}
