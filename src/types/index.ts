import { z } from "zod"

export const projectShcema = z.object({
  _id: z.string(),
  projectName: z.string(),
  clientName: z.string(),
  description: z.string(),
})

export type Project = z.infer<typeof projectShcema>
export type ProjectFormData = Pick<
  Project,
  "clientName" | "projectName" | "description"
>
