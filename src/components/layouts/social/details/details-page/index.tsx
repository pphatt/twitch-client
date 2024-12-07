import * as React from "react"
import type { PostComment } from "@modules/user/presentation/http/dto/response/social/get-all-comments.response.dto"
import type { PostDetailsDto } from "@modules/user/presentation/http/dto/response/social/get-post-details.response.dto"
import type { GetPostReactionResponseDto } from "@modules/user/presentation/http/dto/response/social/get-post-reaction.response.dto"
import FriendList from "src/components/layouts/social/components/friend-list"
import FriendListItem from "src/components/layouts/social/components/friend-list-item"
import CommentsSection from "src/components/layouts/social/details/comments/comments-section"
import PostContent from "src/components/layouts/social/details/post-content"

import CreatorInformation from "@/components/layouts/social/details/creator-information"
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
  isUserFollowed: boolean

  accessToken: string
}

export default function DetailsPageComponent({
  post,
  comments,
  sortedReactions,
  isUserPost,
  currentUserReactionType,
  isPostDelete,
  isUserFollowed,
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
                        isUserPost={isUserPost}
                        isUserFollowed={isUserFollowed}
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
                  <CreatorInformation
                    username={post.user.username}
                    avatarUrl={post.user.avatar}
                    isUserFollowed={isUserFollowed}
                    destinationUserId={post.user.id}
                  />

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
