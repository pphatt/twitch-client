import * as React from "react"
import Link from "next/link"
import type { IRecommendedLiveChannel } from "@/types"

import { cn, formatViewCount } from "@/lib/utils"
import { Tags } from "@/components/common/tag"
import styles from "@/styles/components/common/channel-card.module.scss"

interface ChannelCardProps extends React.HTMLAttributes<HTMLDivElement> {
  channel: IRecommendedLiveChannel
}

export function ChannelCard({
  channel,
  className,
  ...props
}: ChannelCardProps) {
  const {
    channel: currentChannel,
    title,
    slug,
    livePreviewImage,
    totalView,
    category,
    tags,
  } = channel

  return (
    <div className={cn(styles["card-wrapper"], className)} {...props}>
      <div className={styles["card-container"]}>
        <div className={styles["card"]}>
          <article className={styles["card-info"]}>
            <div className={styles["card-image-wrapper"]}>
              <div className={styles["top-left-corner"]}></div>
              <div className={styles["bottom-right-corner"]}></div>
              <div className={styles["left-bar"]}></div>
              <div className={styles["bottom-bar"]}></div>
              <Link href={slug} className={styles["card-image-overlay"]}>
                <div className={styles["card-image-overlay"]}>
                  <div className={styles["card-image-container"]}>
                    <div className={styles["card-image-placeholder-wrapper"]}>
                      <div
                        className={styles["card-image-placeholder-container"]}
                      >
                        <div className={styles["card-image-placeholder"]}></div>
                        <img
                          src={livePreviewImage}
                          alt={title}
                          className={styles["card-image"]}
                        />
                      </div>
                    </div>
                  </div>

                  <div className={styles["live-section-wrapper"]}>
                    <div className={styles["live-section-container"]}>
                      <p>LIVE</p>
                    </div>
                  </div>

                  <div className={styles["current-view-wrapper"]}>
                    <div className={styles["current-view-container"]}>
                      {formatViewCount(totalView)} Viewers
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className={styles["channel-content-wrapper"]}>
              <div className={styles["channel-content-container"]}>
                <div className={styles["channel-image-wrapper"]}>
                  <Link href={slug} className={styles["channel-image-link"]}>
                    <div className={styles["channel-image-overlay"]}></div>
                    <div className={styles["channel-image-container"]}>
                      <img
                        src={currentChannel.image}
                        alt={currentChannel.name}
                        className={styles["channel-image"]}
                      />
                    </div>
                  </Link>
                </div>
                <div className={styles["channel-info-wrapper"]}>
                  <div className={styles["channel-info-container"]}>
                    <Link href={slug} className={styles["channel-info-link"]}>
                      <div className={styles["stream-title"]}>
                        <h3>{title}</h3>
                      </div>

                      <div className={styles["channel-name"]}>
                        <p>{currentChannel.name}</p>
                      </div>
                    </Link>

                    <p className={styles["category-wrapper"]}>
                      <Link href={"/"}>{category}</Link>
                    </p>
                  </div>

                  <Tags tags={tags} />
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}
