import * as z from "zod"

export const UpdateBioRequestDtoSchema = z.object({
  bio: z.string().max(300, {
    message: "*Bio description must be under 300 characters",
  }),
})

export type UpdateBioRequestDto = z.infer<typeof UpdateBioRequestDtoSchema>
