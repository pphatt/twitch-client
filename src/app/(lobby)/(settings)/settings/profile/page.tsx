import * as React from "react"
import { cookies } from "next/headers"
import { UserRequest } from "@modules/core/presentation/endpoints/user/user.request"

import ProfilePicture from "@/components/settings/profile/profile-picture"
import UpdateProfileForm from "@/components/settings/profile/update-profile-form"

export default async function ProfilePage() {
  const accessToken = cookies().get("access-token")?.value

  const { data } = await UserRequest.whoami({
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })

  const { image } = data.data

  return (
    <>
      <ProfilePicture image={image.url} />

      <UpdateProfileForm profile={data.data} />
    </>
  )
}
