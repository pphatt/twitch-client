import { z } from "zod"

export const genericBooleanishEnumSchema = z.enum(["false", "true"])

export type BooleanishEnum = z.infer<typeof genericBooleanishEnumSchema>
