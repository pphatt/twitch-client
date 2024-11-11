import * as React from "react"

import {
  CooldownButtonButton,
  CooldownButtonContainer,
  CooldownButtonText,
  CooldownButtonWrapper,
} from "@/components/forms/btn-with-cooldown/style"

interface CoolDownButtonProps {
  coolDownTime?: number

  isLoading?: boolean
  callback: () => Promise<void>

  text: string

  /* `${coolDownText} ${time}s` */
  coolDownText: string
}

export default function ResendOtpBtn({
  coolDownTime = 30,
  isLoading = false,
  callback,
  text,
  coolDownText,
}: CoolDownButtonProps) {
  const [time, setTime] = React.useState<number>(coolDownTime)
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
      setTime(coolDownTime)
    }

    return () => clearInterval(timer)
  }, [click, coolDownTime, time])

  const processCallback = () => {
    if (isLoading || isPending) return

    startTransition(async () => {
      await callback()
    })
  }

  return (
    <CooldownButtonWrapper>
      <CooldownButtonButton
        onClick={() => {
          setClick(true)
          processCallback()
        }}
        disabled={click}
        type={"button"}
      >
        <CooldownButtonContainer>
          <CooldownButtonText>
            {click || isLoading || isPending
              ? `${coolDownText} ${time}s`
              : text}
          </CooldownButtonText>
        </CooldownButtonContainer>
      </CooldownButtonButton>
    </CooldownButtonWrapper>
  )
}
