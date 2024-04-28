import type { ClientSchema } from "@aws-amplify/backend"
import { a } from "@aws-amplify/backend"
import { addUserToGroup as resource } from "./resource"

export const addUserToGroup = a
  .mutation()
  .arguments({
    userId: a.string().required(),
    groupName: a.string().required(),
  })
  .authorization((allow) => [allow.group("ADMINS")])
  .handler(a.handler.function(resource))
  .returns(a.json())

const schema = a.schema({ addUserToGroup })

export type Handler = ClientSchema<
  typeof schema
>["addUserToGroup"]["functionHandler"]
