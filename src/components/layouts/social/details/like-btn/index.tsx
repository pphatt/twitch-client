"use client"

import * as React from "react"
import * as HoverCard from "@radix-ui/react-hover-card"

import { Icons } from "@/components/icons"
import styles from "@/components/layouts/social/details/like-btn/style.module.scss"

export default function LikeBtn() {
  const [selectedReaction, setSelectedReaction] = React.useState("like")

  return (
    <HoverCard.Root>
      <HoverCard.Trigger asChild>
        <div className={styles["like-btn-wrapper"]}>
          <div className={styles["like-btn-container"]}>
            <Icons.love fill={"#ef4444"} />

            <span>1</span>
          </div>
        </div>
      </HoverCard.Trigger>

      <HoverCard.Content
        className={styles["reaction-container-wrapper"]}
        align={"center"}
        side={"top"}
      >
        <div className={styles["reaction-container-container"]}>
          <div
            className={styles["reaction-item-container"]}
            onClick={() => setSelectedReaction("like")}
          >
            <Icons.like
              fill={selectedReaction === "like" ? "#363f7e" : "none"}
            />
          </div>

          <div
            className={styles["reaction-item-container"]}
            onClick={() => setSelectedReaction("love")}
          >
            <Icons.love
              fill={selectedReaction === "love" ? "#ef4444" : "none"}
            />
          </div>

          <div className={styles["reaction-item-container"]}>
            <Icons.haha />
          </div>

          <div className={styles["reaction-item-container"]}>
            <Icons.sad />
          </div>

          <div className={styles["reaction-item-container"]}>
            <Icons.angry />
          </div>
        </div>
      </HoverCard.Content>
    </HoverCard.Root>
  )
}

// <Tooltip.Provider>
//   <Tooltip.Root>
//     <Tooltip.Trigger asChild>
//       <div className={styles["like-btn-wrapper"]}>
//         <div className={styles["like-btn-container"]}>
//           <svg
//             data-id="3"
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="h-5 w-5 fill-primary"
//           >
//             <path d="M7 10v12"></path>
//             <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"></path>
//           </svg>
//         </div>
//       </div>
//     </Tooltip.Trigger>
//
//     <Tooltip.Content>
//       <div className={styles["reaction-container-wrapper"]}>
//         <div className={styles["reaction-container-container"]}>
//           <HoverCard.Root>
//             <HoverCard.Trigger>
//               Normal Tooltip.Trigger
//             </HoverCard.Trigger>
//
//             <HoverCard.Portal>
//               <HoverCard.Content>Normal Tooltip.Content</HoverCard.Content>
//             </HoverCard.Portal>
//           </HoverCard.Root>
//         </div>
//       </div>
//     </Tooltip.Content>
//   </Tooltip.Root>
// </Tooltip.Provider>
