import * as React from "react"
import type { PostComment } from "@modules/user/presentation/http/dto/response/social/get-all-comments.response.dto"
import type { PostDetailsDto } from "@modules/user/presentation/http/dto/response/social/get-post-details.response.dto"
import type { GetPostReactionResponseDto } from "@modules/user/presentation/http/dto/response/social/get-post-reaction.response.dto"
import FriendList from "src/components/layouts/social/components/friend-list"
import FriendListItem from "src/components/layouts/social/components/friend-list-item"
import CommentsSection from "src/components/layouts/social/details/comments/comments-section"
import PostContent from "src/components/layouts/social/details/post-content"

import DetailsContentHeader from "@/components/layouts/social/details/details-content-header"
import styles from "@/components/layouts/social/details/details-page/style.module.scss"
import EmptyPostScreen from "@/components/layouts/social/details/empty-post-screen"
import ProcessViewCountWrap from "@/components/layouts/social/details/process-view-count-wrap"

interface DetailsPageComponentProps {
  post: PostDetailsDto
  comments: PostComment[]
  sortedReactions: GetPostReactionResponseDto[]
  isUserPost: boolean
  currentUserReactionType: string
  isPostDelete: boolean

  accessToken: string
}

export default function DetailsPageComponent({
  post,
  comments,
  sortedReactions,
  isUserPost,
  currentUserReactionType,
  isPostDelete,
  accessToken,
}: DetailsPageComponentProps) {
  return (
    <ProcessViewCountWrap postId={post.info.id} accessToken={accessToken}>
      <div className={styles["root-page-layout-wrapper"]}>
        <div className={styles["root-page-layout-container"]}>
          <div className={styles["root-page-layout-overlay"]}>
            <div className={styles["root-page-content-wrapper"]}>
              <div className={styles["root-page-content-container"]}>
                <DetailsContentHeader
                  postId={post.info.id}
                  isUserPost={isUserPost}
                  isPostDeleted={isPostDelete}
                />

                <div>
                  {isPostDelete ? (
                    <EmptyPostScreen />
                  ) : (
                    <>
                      <PostContent
                        post={post}
                        sortedReactions={sortedReactions}
                        commentsCount={comments.length}
                        currentUserReactionType={currentUserReactionType}
                      />

                      <CommentsSection
                        postId={post.info.id}
                        comments={comments}
                      />
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className={styles["root-page-container-right-wrapper"]}>
            <div className={styles["root-page-container-right-container"]}>
              <div className={styles["root-page-container-right-overlay"]}>
                <div>
                  <div className={styles["post-now-side-section-wrapper"]}>
                    <div
                      className={styles["post-now-side-section-header-wrapper"]}
                    >
                      <h2
                        className={
                          styles["post-now-side-section-header-text-wrapper"]
                        }
                      >
                        Creator Information
                      </h2>
                    </div>

                    <div className={styles["recommend-friend-content-wrapper"]}>
                      <div
                        className={styles["recommend-friend-content-container"]}
                      >
                        <FriendListItem
                          image={
                            post.user.avatar !== ""
                              ? post.user.avatar
                              : "/avatar/user-default-picture.png"
                          }
                          name={post.user.username}
                          slug={`/social/profile/${post.user.username}`}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <FriendList />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProcessViewCountWrap>
  )
}
