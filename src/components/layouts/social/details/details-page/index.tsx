import * as React from "react"
import type { PostComment } from "@modules/user/presentation/http/dto/response/social/get-all-comments.response.dto"
import type { PostDetailsDto } from "@modules/user/presentation/http/dto/response/social/get-post-details.response.dto"
import FriendList from "src/components/layouts/social/components/friend-list"
import FriendListItem from "src/components/layouts/social/components/friend-list-item"
import CommentsSection from "src/components/layouts/social/details/comments/comments-section"
import PostContent from "src/components/layouts/social/details/post-content"

import DetailsContentHeader from "@/components/layouts/social/details/details-content-header"
import styles from "@/components/layouts/social/details/details-page/style.module.scss"
import EmptyPostScreen from "@/components/layouts/social/details/empty-post-screen"

interface DetailsPageComponentProps {
  post: PostDetailsDto
  comments: PostComment[]
  isUserPost: boolean
  isPostDelete: boolean
}

export default function DetailsPageComponent({
  post,
  comments,
  isUserPost,
  isPostDelete,
}: DetailsPageComponentProps) {
  return (
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
                    <PostContent post={post} commentsCount={comments.length} />

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
                          "https://s120-ava-talk.zadn.vn/d/7/5/d/4/120/aae4fe2e565d553d5f325f2aa0ef2cf1.jpg"
                        }
                        name={"Đặng Viễn Hào"}
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
  )
}
