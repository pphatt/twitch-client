// server side checking auth

import { cache } from "react"
import { cookies } from "next/headers"

import { UserRepository } from "../modules/user/infrastructure/repository/user.repository"

export const isAuthenticated = cache(() => {
  return !!cookies().get("access-token")
})

export const getUserProfile = cache(async () => {
  return await UserRepository.profile()
})
