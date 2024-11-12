import * as React from "react"
import styles from "@/assets/logo/logo-with-text/style.module.scss"

export default function LogoWithText() {
  return (
    <div className={styles["logo"]}>
      <svg width="114" height="38" viewBox="0 0 114 38">
        <path d="M108.997 7h-5V.002H93.019l-5.05 7h-8.971l-3 3V7h-7V0h-22v7H16.05L11 0v.001H0v24L14 38h14v-4l4 4h26.998v-4l4 4h13v-4l4 4h24.999l9-9V12l-5-5zM17 17h-7v2h7v8H6l-4-4V2h8v7h7v8zm29.999 10h-24l-4-4V9h8v10h2V9h8v10h2V9h8v18zm10 0h-8V9h8v18zm0-20h-8V2h8v5zm16.999 10h-7v2h7v8h-11l-4-4V2h8v7h7v8zm18 0h-8v2h8v8h-12l-4-4V13l4-4h12v8zm19.999 10h-8V17h-2v10h-8V2h8v7h6l4 4v14z"></path>
        <path
          fill="#fff"
          d="M17 17h-7v2h7v8H6l-4-4V2h8v7h7v8zm29.999 10h-24l-4-4V9h8v10h2V9h8v10h2V9h8v18zm9.999-18h-8v18h8V9zm0-6.999h-8v5h8V2zm17 14.999h-7v2h7v8h-11l-4-4V2h8v7h7v8zm18 0h-8v2h8v8h-12l-4-4V13l4-4h12v8zm19.999 10h-8V17h-2v10h-8V2h8v7h6l4 4v14z"
        ></path>
      </svg>
    </div>
  )
}
