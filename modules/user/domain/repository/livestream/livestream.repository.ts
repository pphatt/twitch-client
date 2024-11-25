import type { CategoryEntity } from "@modules/user/domain/entity/category.entity"
import type { SearchCategoryByNameRequestDto } from "@modules/user/presentation/http/dto/request/livestream/search-category-by-name.request.dto"
import type { SetStreamInfoRequestDto } from "@modules/user/presentation/http/dto/request/livestream/set-stream-info.request.dto"

export interface ILiveStreamRepository {
  searchCategoryByName: (
    body: SearchCategoryByNameRequestDto
  ) => Promise<{ data: { data: CategoryEntity[] } }>

  setStreamInfo: (body: SetStreamInfoRequestDto) => Promise<void>
}
