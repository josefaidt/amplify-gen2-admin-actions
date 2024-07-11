import type { ClientSchema } from "@aws-amplify/backend"
import { a } from "@aws-amplify/backend"
import { removeUserFromGroup as resource } from "./resource"

export const removeUserFromGroup = a
  .mutation()
  .arguments({
    userId: a.string().required(),
    groupName: a.string().required(),
  })
  .authorization((allow) => [allow.group("ADMINS")])
  .handler(a.handler.function(resource))
  .returns(a.json())

export const schema = a.schema({ removeUserFromGroup })

export type Handler = ClientSchema<
  typeof schema
>["removeUserFromGroup"]["functionHandler"]
