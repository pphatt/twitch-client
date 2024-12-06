import * as React from "react"

import { Icons } from "@/components/icons"
import LikeBtn from "@/components/layouts/social/details/like-btn"
import styles from "@/components/layouts/social/details/post-footer/style.module.scss"
import {
  ArticleContentFooterContainer,
  ArticleViewCountWrapper,
} from "@/components/layouts/social/home/post/style"

interface PostFooterProps {
  viewCount: number
  commentsCount: number
}

export default function PostFooter({ viewCount, commentsCount }: PostFooterProps) {
  return (
    <div className={styles["article-footer-layout-wrapper"]}>
      <ArticleContentFooterContainer>
        <ArticleViewCountWrapper>
          <Icons.view />
          <span>{viewCount}</span>
        </ArticleViewCountWrapper>
      </ArticleContentFooterContainer>

      {/*<div className={styles["article-footer-reaction-group"]}>*/}
      {/*  <div className={styles["article-footer-reaction-item-wrapper"]}>*/}
      {/*    <Icons.love fill={"#ef4444"} />*/}
      {/*    <span>1</span>*/}
      {/*  </div>*/}
      {/*</div>*/}

      <div className={styles["article-footer-layout-container"]}>
        <div className={styles["article-footer-left-group"]}>
          <LikeBtn />

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
