"use client"

import * as React from "react"

import ProfilePageLayout from "@/components/dashboard-profile/profile-page-layout"
import ShowPreviewBtn from "@/components/dashboard-profile/show-preview"
import SubmitBtn from "@/components/dashboard-profile/submit-btn"
import BioInput from "@/components/forms/dashboard/bio-input"
import DisplayNameInput from "@/components/forms/dashboard/displayname-input"
import UsernameInput from "@/components/forms/dashboard/username-input"
import styles from "@/styles/application/dashboard/settings/channel/page.module.scss"

export default function ChannelSettingsPage() {
  const [openReview, setOpenReview] = React.useState(true)

  const [isPending, startTransition] = React.useTransition()

  return (
    <ProfilePageLayout>
      <ShowPreviewBtn
        openReview={openReview}
        setOpenReview={() => setOpenReview(!openReview)}
      />

      <div className={styles["profile-settings-header-wrapper"]}>
        <h3 className={styles["profile-settings-header-text"]}>
          Profile Settings
        </h3>

        <div className={styles["profile-setting-header-description-wrapper"]}>
          <p className={styles["profile-setting-header-description-text"]}>
            Change identifying details for your account
          </p>
        </div>
      </div>

      <div className={styles["profile-settings-content-wrapper"]}>
        <div className={styles["profile-settings-content-container"]}>
          <UsernameInput />

          <DisplayNameInput />

          <BioInput />
        </div>

        <SubmitBtn isPending={isPending} disabled={isPending} />
      </div>
    </ProfilePageLayout>
  )
}
