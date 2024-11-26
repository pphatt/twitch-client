import { cookies } from "next/headers"
import { UserRequest } from "@modules/core/presentation/endpoints/user/user.request"

import ChannelSettingsPageLayout from "@/app/(dashboard)/u/[username]/settings/channel/_components/channel-setting-page-layout"

export default async function ChannelSettingsPage() {
  const accessToken = cookies().get("access-token")?.value

  const { data } = await UserRequest.whoami({
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })

  return <ChannelSettingsPageLayout profile={data.data} />
}
