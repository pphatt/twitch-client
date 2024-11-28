import * as React from "react"
import { AdminUsersRequest } from "@modules/core/presentation/endpoints/admin/users/admin.users.request"

import DetailsUserPageComponent from "@/app/(admin)/staff/admin/user/details/[userId]/_components/page-component"

interface SearchPageProps {
  params: { userId: string }
}

export default async function DetailsUserPage({ params }: SearchPageProps) {
  const { userId } = params

  const { data } = await AdminUsersRequest.getSpecificUser({ id: userId })

  return <DetailsUserPageComponent user={data.data} />
}
