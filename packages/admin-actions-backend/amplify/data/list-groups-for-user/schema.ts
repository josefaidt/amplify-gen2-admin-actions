import type { ClientSchema } from "@aws-amplify/backend"
import { a } from "@aws-amplify/backend"
import { listGroupsForUser as resource } from "./resource"

export const listGroupsForUser = a
  .mutation()
  .arguments({
    userId: a.string().required(),
  })
  .authorization((allow) => [allow.group("ADMINS")])
  .handler(a.handler.function(resource))
  .returns(a.json())

export const schema = a.schema({ listGroupsForUser })

export type Handler = ClientSchema<
  typeof schema
>["listGroupsForUser"]["functionHandler"]
