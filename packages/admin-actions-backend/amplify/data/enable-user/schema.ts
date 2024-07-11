import type { ClientSchema } from "@aws-amplify/backend"
import { a } from "@aws-amplify/backend"
import { enableUser as resource } from "./resource"

export const enableUser = a
  .mutation()
  .arguments({
    userId: a.string().required(),
  })
  .authorization((allow) => [allow.group("ADMINS")])
  .handler(a.handler.function(resource))
  .returns(a.json())

export const schema = a.schema({ enableUser })

export type Handler = ClientSchema<
  typeof schema
>["enableUser"]["functionHandler"]
