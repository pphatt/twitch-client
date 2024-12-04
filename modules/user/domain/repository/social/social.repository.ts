import type { DeletePostRequestDto } from "@modules/core/presentation/endpoints/social/social.endpoints"

export interface ISocialRepository {
  createPost: (
    body: FormData
  ) => Promise<{ data: { data: string } }>
  
  deletePost: (body: DeletePostRequestDto) => Promise<void>
}
