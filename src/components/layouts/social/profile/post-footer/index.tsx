import * as React from "react"
import * as HoverCard from "@radix-ui/react-hover-card"

import {Icons} from "@/components/icons"
import {EReactionType} from "@/components/layouts/social/details/reaction-button"
import {
  ArticleCommentCountContainer,
  ArticleCommentCountWrapper,
  ArticleContentFooterContainer,
  ArticleContentFooterWrapper,
} from "@/components/layouts/social/home/post/style"
import styles from "@/components/layouts/social/profile/post-footer/style.module.scss"
import ReactionButton from "@/components/layouts/social/profile/reaction-button"

interface PostFooterProps {
  postId: string
  commentCount: number
  reactions: { type: EReactionType; count: number }[]
  reactionCount: number
  currentReaction?: EReactionType
  validateData: () => void
}

export default function PostFooter({
                                     postId,
                                     commentCount,
                                     reactions,
                                     reactionCount,
                                     currentReaction,
                                     validateData
                                   }: PostFooterProps) {
  return (
    <>
      {reactions.length > 0 && (
        <div className={styles["article-footer-reaction-group"]}>
          {reactions.map(({type, count}, index) => (
            <HoverCard.Root key={index} openDelay={200} closeDelay={0}>
              <HoverCard.Trigger asChild>
                <div
                  data-current={currentReaction === type}
                  className={styles["article-footer-reaction-item-wrapper"]}
                >
                  {type === EReactionType.LIKE && (
                    <img src={"/reaction/like.svg"} alt={""}/>
                  )}

                  {type === EReactionType.LOVE && (
                    <img src={"/reaction/love.svg"} alt={""}/>
                  )}

                  {type === EReactionType.HAHA && (
                    <img src={"/reaction/haha.svg"} alt={""}/>
                  )}

                  {type === EReactionType.SAD && (
                    <img src={"/reaction/sad.svg"} alt={""}/>
                  )}

                  {type === EReactionType.ANGRY && (
                    <img src={"/reaction/angry.svg"} alt={""}/>
                  )}

                  <span>{count}</span>
                </div>
              </HoverCard.Trigger>

              <HoverCard.Content
                className={styles["user-reaction-container-wrapper"]}
                align={"center"}
                side={"top"}
                avoidCollisions={true}
              >
                <div
                  className={styles["user-reaction-container-container"]}
                ></div>
              </HoverCard.Content>
            </HoverCard.Root>
          ))}
        </div>
      )}

      <ArticleContentFooterWrapper>
        <ArticleContentFooterContainer>
          <ReactionButton
            postId={postId}
            reactionCount={reactionCount}
            currentUserReactionType={
              (currentReaction as string | undefined) ?? ""
            }
            callback={validateData}
          />

          <ArticleCommentCountWrapper>
            <ArticleCommentCountContainer href={`/social/post/${postId}`}>
              <Icons.messageSquareText/>
              <span>{commentCount}</span>
            </ArticleCommentCountContainer>
          </ArticleCommentCountWrapper>
        </ArticleContentFooterContainer>
      </ArticleContentFooterWrapper>
    </>
  )
}
