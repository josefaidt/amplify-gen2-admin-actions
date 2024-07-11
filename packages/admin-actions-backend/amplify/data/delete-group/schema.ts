import type { ClientSchema } from "@aws-amplify/backend"
import { a } from "@aws-amplify/backend"
import { deleteGroup as resource } from "./resource"

export const deleteGroup = a
  .mutation()
  .arguments({
    name: a.string().required(),
  })
  .authorization((allow) => [allow.group("ADMINS")])
  .handler(a.handler.function(resource))
  .returns(a.json())

export const schema = a.schema({ deleteGroup })

export type Handler = ClientSchema<
  typeof schema
>["deleteGroup"]["functionHandler"]
