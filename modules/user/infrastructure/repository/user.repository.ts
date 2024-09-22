import axios from "axios"

import type { IUserRepository } from "../../domain/repository/user/user.repository"

export const UserRepository: IUserRepository = {
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  async login(body: any): Promise<any> {
    const req = await axios.post("http://localhost:3000/auth/login", body)

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return req.data
  },

  async signup(): Promise<void> {
    return Promise.resolve(undefined)
  },

  async logout(): Promise<void> {
    return Promise.resolve(undefined)
  },

  async forgotPassword(): Promise<void> {
    return Promise.resolve(undefined)
  },

  async resetPassword(): Promise<void> {
    return Promise.resolve(undefined)
  },

  async profile(): Promise<void> {
    return Promise.resolve(undefined)
  },

  async updateProfile(): Promise<void> {
    return Promise.resolve(undefined)
  },
}
