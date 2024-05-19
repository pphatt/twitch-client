import * as React from "react"
import Link from "next/link"

import { categoryData } from "@/config/data"
import { formatViewCount } from "@/lib/utils"
import styles from "@/styles/lobby/page.module.scss"
import {Separator} from "@/components/ui/separator";

export default function LobbyPage() {
  return (
    <div className={styles["page-wrapper"]}>
      <div className={styles["page-container"]}>
        <div className={styles["content-wrapper"]}>
          <div className={styles["content-container"]}>
            <section className={styles["layout-wrapper"]}>
              <div>
                <div className={styles["content-section"]}>
                  <div className={styles["content-section-header"]}>
                    <h2 className={styles["content-section-header-text"]}>
                      <Link href={"/directory"}>Categories</Link>
                      <span> we think you’ll like</span>
                    </h2>
                  </div>

                  <div className={styles["content-list-wrapper"]}>
                    <div className={styles["content-list-container"]}>
                      {categoryData.categories.map(
                        (
                          { title, image, currentTotalView, slug, tags },
                          index
                        ) => (
                          <div className={styles["card-wrapper"]} key={index}>
                            <div className={styles["card-container"]}>
                              <div className={styles["card"]}>
                                <div className={styles["card-info"]}>
                                  <Link
                                    href={`/directory/category/${slug}`}
                                    className={styles["card-image-wrapper"]}
                                  >
                                    <div className={styles["top-left-corner"]}></div>
                                    <div className={styles["bottom-right-corner"]}></div>
                                    <div className={styles["left-bar"]}></div>
                                    <div className={styles["bottom-bar"]}></div>
                                    <div
                                      className={styles["card-image-container"]}
                                    >
                                      <img
                                        src={image}
                                        alt={title}
                                        className={styles["card-image"]}
                                      />
                                    </div>
                                  </Link>

                                  <div className={styles["card-body"]}>
                                    <div className={styles["category-title"]}>
                                      <Link
                                        href={`/directory/category/${slug}`}
                                      >
                                        <h2>{title}</h2>
                                      </Link>
                                    </div>
                                    <div
                                      className={
                                        styles["category-current-total-view"]
                                      }
                                    >
                                    <Link
                                        href={`/directory/category/${slug}`}
                                      >
                                        {formatViewCount(currentTotalView)}
                                        Viewers
                                      </Link>
                                    </div>
                                  </div>
                                </div>

                                <div className={styles["category-tags"]}>
                                  {tags.map(({ name }) => (
                                    <Link href={"/"} className={styles["tag-link"]}>{name}</Link>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      )}
                    </div>

                    <div className={styles["separator"]}></div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
