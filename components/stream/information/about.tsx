"use client"

import * as React from "react"

import type { LiveChannelDataI } from "@/config/data"
import { Icons } from "@/components/icons"
import styles from "@/styles/components/stream/information/about.module.scss"

interface AboutProps {
  channel: LiveChannelDataI
}

export default function About({ channel }: AboutProps) {
  const ref = React.useRef<HTMLDivElement | null>(null)

  const [height, setHeight] = React.useState<number>(0)

  React.useEffect(() => {
    if (!ref.current) {
      return
    }

    setHeight(ref.current?.clientHeight)
  }, [])

  return (
    <div
      ref={ref}
      style={{
        minHeight: `${height}px`,
      }}
    >
      <div className={styles["channel-about-layout-wrapper"]}>
        <div>
          <section
            id="live-channel-about-panel"
            aria-label="About Panel"
            aria-hidden="false"
            tabIndex={0}
            style={{
              display: "block",
            }}
          >
            <div
              style={{
                position: "relative",
              }}
            >
              <div className={styles["about-panel-wrapper"]}>
                <div className={styles["about-panel-container"]}>
                  <div
                    data-a-target="about-panel"
                    className={styles["about-section-wrapper"]}
                  >
                    <div className={styles["about-section-header-wrapper"]}>
                      <div className={styles["about-section-header-text"]}>
                        <h3 className={styles["about-section-header"]}>
                          About {channel.channel.name}
                        </h3>
                      </div>

                      <div className={styles["about-section-icon-wrapper"]}>
                        <div className={styles["about-section-icon-container"]}>
                          <Icons.verifiedPartner />
                        </div>
                      </div>
                    </div>

                    <div className={styles["about-section-container"]}>
                      <div className={styles["about-section-overlay"]}>
                        <div
                          className={styles["about-section-content-wrapper"]}
                        >
                          <div
                            className={
                              styles["about-section-content-header-wrapper"]
                            }
                          >
                            <span
                              className={
                                styles["about-section-content-header-container"]
                              }
                            >
                              <div
                                className={
                                  styles["about-section-content-header-overlay"]
                                }
                              >
                                <div
                                  className={styles["follower-count-wrapper"]}
                                >
                                  <span>
                                    {Intl.NumberFormat("en-US", {
                                      notation: "compact",
                                      maximumFractionDigits: 1,
                                    })
                                      .format(channel.channel.follower)
                                      .replace(/\.\d*/, "")}
                                  </span>
                                  {channel.channel.follower > 0
                                    ? "followers"
                                    : "follower"}
                                </div>
                              </div>
                            </span>
                          </div>

                          <p className={styles["about-section-content"]}>
                            {channel.channel.bio
                              ? channel.channel.bio
                              : `${channel.channel.name} streams ${channel.category}`}
                          </p>
                        </div>

                        <div
                          className={styles["about-social-media-wrapper"]}
                          style={{
                            minWidth: "30px",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <div data-a-target="goal-panel"></div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div>
          <div className={styles["channel-extension-wrapper"]}></div>
        </div>
      </div>
    </div>
  )
}
