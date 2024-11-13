import * as z from "zod"

export const FormSignInRequestDtoSchema = z.object({
  username: z
    .string()
    .min(4, {
      message: "*Username must be at least 4 characters long",
    })
    .regex(/^[a-zA-Z0-9]+$/, {
      message: "*Username must only contain alphanumeric characters",
    }),
  password: z
    .string()
    .min(8, {
      message: "*Password must be at least 8 characters long",
    })
    .regex(
      new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"),
      {
        message:
          "*Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character",
      }
    ),
})

export const SignInRequestDtoSchema = z.object({
  username: z
    .string()
    .min(4, {
      message: "*Username must be at least 4 characters long",
    })
    .regex(/^[a-zA-Z0-9]+$/, {
      message: "*Username must only contain alphanumeric characters",
    }),
  password: z
    .string()
    .min(8, {
      message: "*Password must be at least 8 characters long",
    })
    .regex(
      new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"),
      {
        message:
          "*Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character",
      }
    ),
  deviceName: z.string(),
  userAgent: z.string(),
  ipAddress: z.string(),
  deviceType: z.string(),
})

export type FormSignInRequestDto = z.infer<typeof FormSignInRequestDtoSchema>

export type SignInRequestDto = z.infer<typeof SignInRequestDtoSchema>
