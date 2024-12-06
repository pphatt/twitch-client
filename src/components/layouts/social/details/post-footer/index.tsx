import * as React from "react"
import type { GetPostReactionResponseDto } from "@modules/user/presentation/http/dto/response/social/get-post-reaction.response.dto"
import * as HoverCard from "@radix-ui/react-hover-card"
import ReactionButton, {
  EReactionType,
} from "src/components/layouts/social/details/reaction-button"

import { Icons } from "@/components/icons"
import styles from "@/components/layouts/social/details/post-footer/style.module.scss"
import {
  ArticleContentFooterContainer,
  ArticleViewCountWrapper,
} from "@/components/layouts/social/home/post/style"

interface PostFooterProps {
  postId: string
  viewCount: number
  commentsCount: number

  sortedReactions: GetPostReactionResponseDto[]
}

export default function PostFooter({
  postId,
  viewCount,
  commentsCount,
  sortedReactions,
}: PostFooterProps) {
  return (
    <div className={styles["article-footer-layout-wrapper"]}>
      <ArticleContentFooterContainer>
        <ArticleViewCountWrapper>
          <Icons.view />
          <span>{viewCount}</span>
        </ArticleViewCountWrapper>
      </ArticleContentFooterContainer>

      <div className={styles["article-footer-reaction-group"]}>
        {sortedReactions.map(({ type, reactionCount, users }, index) => (
          <HoverCard.Root openDelay={200} closeDelay={0}>
            <HoverCard.Trigger asChild>
              <div
                className={styles["article-footer-reaction-item-wrapper"]}
                key={index}
              >
                {type === EReactionType.LIKE && (
                  <img src={"/reaction/like.svg"} alt={""} />
                )}

                {type === EReactionType.LOVE && (
                  <img src={"/reaction/love.svg"} alt={""} />
                )}

                {type === EReactionType.HAHA && (
                  <img src={"/reaction/haha.svg"} alt={""} />
                )}

                {type === EReactionType.SAD && (
                  <img src={"/reaction/sad.svg"} alt={""} />
                )}

                {type === EReactionType.ANGRY && (
                  <img src={"/reaction/angry.svg"} alt={""} />
                )}

                <span>{reactionCount}</span>
              </div>
            </HoverCard.Trigger>

            <HoverCard.Content
              className={styles["user-reaction-container-wrapper"]}
              align={"center"}
              side={"top"}
              avoidCollisions={true}
            >
              <div className={styles["user-reaction-container-container"]}>
                {users.map(({ username }, index) => (
                  <div key={index} className={styles["user-reaction-row-wrapper"]}>{username}</div>
                ))}
              </div>
            </HoverCard.Content>
          </HoverCard.Root>
        ))}
      </div>

      <div className={styles["article-footer-layout-container"]}>
        <div className={styles["article-footer-left-group"]}>
          <ReactionButton
            postId={postId}
            reactionCount={sortedReactions.reduce(
              (total, reaction) => total + reaction.reactionCount,
              0
            )}
          />

          <div className={styles["btn-wrapper"]}>
            <div className={styles["btn-container"]}>
              <Icons.messageCircle fill={"none"} />

              <span>{commentsCount}</span>
            </div>
          </div>
        </div>

        <div className={styles["btn-wrapper"]}>
          <div className={styles["btn-container"]}>
            <Icons.share fill={"white"} />

            <span>Share</span>
          </div>
        </div>
      </div>
    </div>
  )
}
