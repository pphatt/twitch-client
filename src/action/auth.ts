"use server"

import { cookies } from "next/headers"

export const setAccessToken = async (accessToken: string) => {
  console.log("setAccessToken", accessToken)
  cookies().set("access-token", accessToken)
}

export const setRefreshToken = async (refreshToken: string) => {
  console.log("setRefreshToken", refreshToken)
  cookies().set("refresh-token", refreshToken)
}
