import type { User } from "@modules/core/domain-base/entity/identity/user.entity"
import { NextGetSpecificUserById } from "@modules/core/presentation/endpoints/user/user.endpoints"
import axios from "axios"

export const NextUser = {
  getProfile: async (): Promise<{ data: User }> =>
    axios.get(NextGetSpecificUserById),
}
