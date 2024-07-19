import * as React from "react"

import styles from "@/styles/components/loading/channel/about-loading.module.scss"

export default function AboutLoading() {
  return (
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
                ></div>

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
  )
}
