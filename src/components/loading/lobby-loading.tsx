import * as React from 'react';

import styles from "@/styles/components/loading/lobby-loading.module.scss"

export default function LobbyLoading() {
  return (
    <div className={styles["shell-loader"]}>
      <div className={styles["shell-spinner"]}></div>
    </div>
  );
}
