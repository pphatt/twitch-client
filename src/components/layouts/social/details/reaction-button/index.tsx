"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { axiosHttpErrorHandler } from "@/utils/common"
import { SocialRepository } from "@modules/user/infrastructure/repository/social.repository"
import * as HoverCard from "@radix-ui/react-hover-card"
import * as Tooltip from "@radix-ui/react-tooltip"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { TooltipContent } from "@/components/ui/tooltip"
import { Icons } from "@/components/icons"
import styles from "@/components/layouts/social/details/reaction-button/style.module.scss"

interface ReactionButtonProps {
  postId: string
  reactionCount: number
  currentUserReactionType: string
}

export enum EReactionType {
  LIKE = "LIKE",
  LOVE = "LOVE",
  HAHA = "HAHA",
  SAD = "SAD",
  ANGRY = "ANGRY",
}

export default function ReactionButton({
  postId,
  reactionCount,
  currentUserReactionType,
}: ReactionButtonProps) {
  const router = useRouter()
  const [isPending, startTransition] = React.useTransition()

  const [openReactionDrawer, setOpenReactionDrawer] = React.useState(false)

  const handleReaction = (reactionType: EReactionType) => {
    startTransition(async () => {
      try {
        await SocialRepository.reactToPost({ postId, reactionType })

        router.refresh()
        setOpenReactionDrawer(false)
      } catch (err) {
        const error = axiosHttpErrorHandler(err)

        toast.error(error.message, {
          duration: 5000,
          position: "top-right",
        })

        console.log(error)
      }
    })
  }

  return (
    <HoverCard.Root
      open={openReactionDrawer}
      onOpenChange={setOpenReactionDrawer}
      openDelay={200}
      closeDelay={300}
    >
      <HoverCard.Trigger asChild>
        <div
          className={styles["reaction-btn-wrapper"]}
          onClick={() => {
            if (currentUserReactionType !== "") {
              handleReaction(currentUserReactionType as EReactionType)
            } else {
              handleReaction(EReactionType.LIKE)
            }
          }}
        >
          <div className={styles["reaction-btn-container"]}>
            {currentUserReactionType === "LIKE" && (
              <img src={"/reaction/like.svg"} alt={""} />
            )}

            {currentUserReactionType === "LOVE" && (
              <img src={"/reaction/love.svg"} alt={""} />
            )}

            {currentUserReactionType === "HAHA" && (
              <img src={"/reaction/haha.svg"} alt={""} />
            )}

            {currentUserReactionType === "SAD" && (
              <img src={"/reaction/sad.svg"} alt={""} />
            )}

            {currentUserReactionType === "ANGRY" && (
              <img src={"/reaction/angry.svg"} alt={""} />
            )}

            {currentUserReactionType === "" && <Icons.thumbUp />}

            <span>{reactionCount}</span>
          </div>
        </div>
      </HoverCard.Trigger>

      <HoverCard.Content
        className={styles["reaction-container-wrapper"]}
        align={"center"}
        side={"top"}
      >
        <div className={styles["reaction-container-container"]}>
          <Tooltip.Provider delayDuration={300}>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <Button
                  $variant={"ghost"}
                  className={styles["reaction-item-container"]}
                  onClick={() => handleReaction(EReactionType.LIKE)}
                >
                  <img src={"/reaction/like.svg"} alt={""} />
                </Button>
              </Tooltip.Trigger>

              <Tooltip.Portal>
                <TooltipContent>Like</TooltipContent>
              </Tooltip.Portal>
            </Tooltip.Root>

            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <Button
                  $variant={"ghost"}
                  className={styles["reaction-item-container"]}
                  onClick={() => handleReaction(EReactionType.LOVE)}
                >
                  <img src={"/reaction/love.svg"} alt={""} />
                </Button>
              </Tooltip.Trigger>

              <Tooltip.Portal>
                <TooltipContent>Love</TooltipContent>
              </Tooltip.Portal>
            </Tooltip.Root>

            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <Button
                  $variant={"ghost"}
                  className={styles["reaction-item-container"]}
                  onClick={() => handleReaction(EReactionType.HAHA)}
                >
                  <img src={"/reaction/haha.svg"} alt={""} />
                </Button>
              </Tooltip.Trigger>

              <Tooltip.Portal>
                <TooltipContent>Haha</TooltipContent>
              </Tooltip.Portal>
            </Tooltip.Root>

            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <Button
                  $variant={"ghost"}
                  className={styles["reaction-item-container"]}
                  onClick={() => handleReaction(EReactionType.SAD)}
                >
                  <img src={"/reaction/sad.svg"} alt={""} />
                </Button>
              </Tooltip.Trigger>

              <Tooltip.Portal>
                <TooltipContent>Sad</TooltipContent>
              </Tooltip.Portal>
            </Tooltip.Root>

            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <Button
                  $variant={"ghost"}
                  className={styles["reaction-item-container"]}
                  onClick={() => handleReaction(EReactionType.ANGRY)}
                >
                  <img src={"/reaction/angry.svg"} alt={""} />
                </Button>
              </Tooltip.Trigger>

              <Tooltip.Portal>
                <TooltipContent>Angry</TooltipContent>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>
        </div>
      </HoverCard.Content>
    </HoverCard.Root>
  )
}
