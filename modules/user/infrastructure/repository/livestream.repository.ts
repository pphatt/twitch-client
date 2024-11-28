import { NextLiveStream } from "@modules/core/presentation/endpoints/livestream/livestream.request"
import type { CategoryEntity } from "@modules/user/domain/entity/category.entity"
import type { ILiveStreamRepository } from "@modules/user/domain/repository/livestream/livestream.repository"
import type { SearchCategoryByNameRequestDto } from "@modules/user/presentation/http/dto/request/livestream/search-category-by-name.request.dto"
import type { SetStreamInfoRequestDto } from "@modules/user/presentation/http/dto/request/livestream/set-stream-info.request.dto"

export const LivestreamRepository: ILiveStreamRepository = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  async searchCategoryByName(
    body: SearchCategoryByNameRequestDto
  ): Promise<{ data: { data: CategoryEntity[] | null } }> {
    try {
      const res = await NextLiveStream.searchCategoryByName(body)
      const data = res.data

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      return Promise.resolve({ data })
    } catch (error) {
      return Promise.reject(error)
    }
  },

  async setStreamInfo(body: SetStreamInfoRequestDto): Promise<void> {
    try {
      await NextLiveStream.setStreamInfo(body)
      return Promise.resolve()
    } catch (error) {
      console.log(error)
      return Promise.reject(error)
    }
  },
}
