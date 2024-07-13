"use client"

import * as React from "react"
import Link from "next/link"
import type { IChannel } from "@/types"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import styles from "@/styles/components/stream/information/header.module.scss"
import ReportBtn from "@/components/stream/information/report-btn"
import ShareStreamBtn from "@/components/stream/information/share-btn"

interface ChannelHeaderProps {
  channel: IChannel
}

export default function ChannelHeader({ channel }: ChannelHeaderProps) {
  const [hover, setHover] = React.useState<boolean>(false)

  const username = channel.channel.name

  return (
    <section
      id="live-channel-stream-information"
      aria-label="Stream Information"
    >
      <div className={styles["channel-info-content-wrapper"]}>
        <div className={styles["channel-info-content-container"]}>
          <div className={styles["channel-info-content-layout"]}>
            <div
              className={styles["channel-avatar-wrapper"]}
              aria-label="Channel is Live"
            >
              <div
                style={
                  {
                    "--color-accent": channel?.themeColor ?? "hsl(12 100% 63%)",
                  } as React.CSSProperties
                }
              >
                <Link
                  href={`/${username}`}
                  className={styles["channel-link-wrapper"]}
                >
                  <div className={styles["channel-link-container"]}>
                    <div className={styles["channel-link-cover"]}></div>

                    <div className={styles["channel-link-overlay"]}>
                      <img
                        src={channel?.channel.image}
                        alt={channel?.channel.name}
                      />
                    </div>
                  </div>

                  <div className={styles["live-indicator-wrapper"]}>
                    <div className={styles["live-indicator-container"]}>
                      <div className={styles["live-indicator-overlay"]}>
                        <div className={styles["live-text-wrapper"]}>
                          <div className={styles["live-text-container"]}>
                            <p className={styles["live-text"]}>LIVE</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <div className={styles["channel-info-wrapper"]}>
              <div className={styles["metadata-layout__support"]}>
                <div className={styles["channel-name-wrapper"]}>
                  <div className={styles["channel-name-container"]}>
                    <Link
                      href={`/${username}`}
                      className={styles["channel-name-link"]}
                    >
                      <h1 className={styles["channel-name"]}>
                        {channel?.channel.name}
                      </h1>
                    </Link>

                    <div
                      className={styles["verified-partner-indicator-wrapper"]}
                    >
                      <div
                        className={
                          styles["verified-partner-indicator-container"]
                        }
                      >
                        <div className={styles["verified-partner-icon"]}>
                          <Icons.verifiedPartner aria-label="Verified Partner" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles["channel-action-wrapper"]}>
                  <div className={styles["channel-action-container"]}>
                    <div className={styles["channel-action-overlay"]}>
                      <div className={styles["follow-button-layout-wrapper"]}>
                        <div
                          className={styles["follow-button-layout-container"]}
                        >
                          <div
                            className={styles["follow-button-layout-overlay"]}
                            style={{
                              opacity: "1",
                              transition: "transform 200ms ease-in 200ms",
                            }}
                          >
                            <Button
                              aria-label="Follow"
                              data-a-target="follow-button"
                              data-test-selector="follow-button"
                              className={styles["follow-button"]}
                              onMouseEnter={() => setHover(true)}
                              onMouseLeave={() => setHover(false)}
                            >
                              <div className={styles["follow-button-wrapper"]}>
                                <div
                                  className={styles["follow-button-container"]}
                                >
                                  <div
                                    className={styles["follow-button-overlay"]}
                                  >
                                    <div
                                      className={styles["follow-icon-wrapper"]}
                                      style={{
                                        opacity: "1",
                                        transition: "transform 200ms ease 0ms",
                                        transform: hover
                                          ? "scale(1.2)"
                                          : undefined,
                                      }}
                                    >
                                      <div
                                        className={
                                          styles["follow-icon-container"]
                                        }
                                      >
                                        {hover ? (
                                          <Icons.heartFill />
                                        ) : (
                                          <Icons.heart />
                                        )}
                                      </div>
                                    </div>

                                    <span>
                                      <div className={styles["follow-text"]}>
                                        Follow
                                      </div>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles["live-info-wrapper"]}>
                <div className={styles["live-info-container"]}>
                  <div className={styles["live-info-overlay"]}>
                    <div className={styles["live-description-wrapper"]}>
                      <h2
                        data-a-target="stream-title"
                        title={channel.title}
                        className={styles["live-description-text"]}
                      >
                        {channel.title}
                      </h2>
                    </div>

                    <div className={styles["stream-game-wrapper"]}>
                      <div className={styles["stream-game-container"]}>
                        <Link href={"/"} className={styles["stream-game-link"]}>
                          <span className={styles["stream-game"]}>
                            {channel.category}
                          </span>
                        </Link>
                      </div>

                      <div className={styles["stream-game-tags-wrapper"]}>
                        <div className={styles["stream-game-tags-container"]}>
                          {channel.tags.map(({ name, slug }, index) => (
                            <div
                              className={styles["stream-game-tag-wrapper"]}
                              key={index}
                            >
                              <Link
                                href={slug}
                                className={styles["stream-game-tag-link"]}
                              >
                                <div
                                  className={
                                    styles["stream-game-tag-container"]
                                  }
                                >
                                  <div
                                    className={
                                      styles["stream-game-tag-overlay"]
                                    }
                                  >
                                    <span>{name}</span>
                                  </div>
                                </div>
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles["live-info-action-wrapper"]}>
                  <div className={styles["live-info-action-container"]}>
                    <div className={styles["live-info-action-overlay"]}>
                      <div className={styles["view-and-time-count-wrapper"]}>
                        <div className={styles["view-count-wrapper"]}>
                          <div className={styles["view-count-container"]}>
                            <div className={styles["view-count-icon-wrapper"]}>
                              <Icons.viewer />
                            </div>

                            <p className={styles["view-count-text-wrapper"]}>
                              <span>
                                {new Intl.NumberFormat("en-US").format(
                                  channel.totalView
                                )}
                              </span>
                            </p>
                          </div>
                        </div>

                        <div className={styles["stream-time-wrapper"]}></div>
                      </div>

                      <div className={styles["live-action-wrapper"]}>
                        <ShareStreamBtn />

                        <ReportBtn />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
