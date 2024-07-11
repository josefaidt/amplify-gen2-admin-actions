import type { ClientSchema } from "@aws-amplify/backend"
import { a } from "@aws-amplify/backend"
import { listUsersInGroup as resource } from "./resource"

export const listUsersInGroup = a
  .mutation()
  .arguments({
    groupName: a.string().required(),
  })
  .authorization((allow) => [allow.group("ADMINS")])
  .handler(a.handler.function(resource))
  .returns(a.json())

export const schema = a.schema({ listUsersInGroup })

export type Handler = ClientSchema<
  typeof schema
>["listUsersInGroup"]["functionHandler"]
