import { clearUserSession } from "@/utils/auth.utils"
import { sleep } from "@/utils/common"
import axios from "axios"

import type { IUserRepository } from "../../domain/repository/user/user.repository"

export const UserRepository: IUserRepository = {
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  async login(body: any): Promise<{
    userId: string
    accessToken: string
    refreshToken: string
  }> {
    const req = await axios.post("http://localhost:3001/auth/login", body)

    const result = req.data as {
      userId: string
      accessToken: string
      refreshToken: string
    }

    return result
  },

  async signup(): Promise<void> {
    return Promise.resolve(undefined)
  },

  async logout(): Promise<void> {
    // call to logout api to invoke user session
    // const req = authAxios.post("/logout")

    clearUserSession()
    return Promise.resolve(undefined)
  },

  async forgotPassword(): Promise<void> {
    return Promise.resolve(undefined)
  },

  async resetPassword(): Promise<void> {
    return Promise.resolve(undefined)
  },

  async profile(): Promise<{ id: string }> {
    console.log("call getUserProfile api")
    await sleep(100)
    return Promise.resolve({ id: "66eee2127bc9444c7ead11ec" })
  },

  async updateProfile(): Promise<void> {
    return Promise.resolve(undefined)
  },
}
