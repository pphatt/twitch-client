// server side checking auth

import { cookies } from "next/headers"
import type { User } from "@modules/core/domain-base/entity/identity/user.entity"
import { UserRepository } from "@modules/user/infrastructure/repository/user.repository"

export const isAuthenticated = () => {
  return !!cookies().get("access-token")?.value
}

export const whoami = async (): Promise<User | null> => {
  try {
    const { data } = await UserRepository.profile()

    return data
  } catch (error) {
    console.log(error)
    return null
  }
}
