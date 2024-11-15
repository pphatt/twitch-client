import * as React from "react"

import ProfilePicture from "@/components/settings/profile/profile-picture"
import UpdateProfileForm from "@/components/settings/profile/update-profile-form"

export default function ProfilePage() {
  return (
    <>
      <ProfilePicture />

      <UpdateProfileForm />
    </>
  )
}
