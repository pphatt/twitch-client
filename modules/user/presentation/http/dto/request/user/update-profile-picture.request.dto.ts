import * as z from "zod"

// const MAX_FILE_SIZE = 10000000
// const ACCEPTED_FILE_TYPES = ["image/jpeg", "image/png"]

export const UpdateProfilePictureRequestDtoSchema = z.object({
})

export type UpdateProfilePictureRequestDto = z.infer<
  typeof UpdateProfilePictureRequestDtoSchema
>
