import * as React from "react"
import Link from "next/link"
import type { IRecommendedLiveChannel } from "@/types"

import { formatViewCount } from "@/lib/utils"
import styles from "@/styles/components/recommend-live-channels.module.scss"

export function RecommendLiveChannels({
  channels,
}: {
  channels: IRecommendedLiveChannel[]
}) {
  return (
    <div className={styles["content-section"]}>
      <div className={styles["content-section-header"]}>
        <h2 className={styles["content-section-header-text"]}>
          <Link href={"/directory"}>Live channels</Link>
          <span> we think you’ll like</span>
        </h2>
      </div>

      <div className={styles["content-list-wrapper"]}>
        <div className={styles["content-list-container"]}>
          {channels.map(
            (
              { channel, title, livePreviewImage, totalView, category, tags },
              index
            ) => (
              <div className={styles["card-wrapper"]} key={index}>
                <div className={styles["card-container"]}>
                  <div className={styles["card"]}>
                    <article className={styles["card-info"]}>
                      <div className={styles["card-image-wrapper"]}>
                        <div className={styles["top-left-corner"]}></div>
                        <div className={styles["bottom-right-corner"]}></div>
                        <div className={styles["left-bar"]}></div>
                        <div className={styles["bottom-bar"]}></div>
                        <Link
                          href={"/"}
                          className={styles["card-image-overlay"]}
                        >
                          <div className={styles["card-image-overlay"]}>
                            <div className={styles["card-image-container"]}>
                              <img
                                src={livePreviewImage}
                                alt={title}
                                className={styles["card-image"]}
                              />
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
                            <Link
                              href={"/"}
                              className={styles["channel-image-link"]}
                            >
                              <div
                                className={styles["channel-image-overlay"]}
                              ></div>
                              <div
                                className={styles["channel-image-container"]}
                              >
                                <img
                                  src={channel.image}
                                  alt={channel.name}
                                  className={styles["channel-image"]}
                                />
                              </div>
                            </Link>
                          </div>
                          <div className={styles["channel-info-wrapper"]}>
                            <div className={styles["channel-info-container"]}>
                              <Link
                                href={"/"}
                                className={styles["channel-info-link"]}
                              >
                                <div className={styles["stream-title"]}>
                                  <h3>{title}</h3>
                                </div>

                                <div className={styles["channel-name"]}>
                                  <p>{channel.name}</p>
                                </div>
                              </Link>

                              <p className={styles["category-wrapper"]}>
                                <Link href={"/"}>{category}</Link>
                              </p>
                            </div>

                            <div className={styles["channel-tags"]}>
                              {tags.map(({name}) => (
                                <Link href={"/"} className={styles["tag-link"]}>
                                  {name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        <div className={styles["separator"]}></div>
      </div>
    </div>
  )
}
