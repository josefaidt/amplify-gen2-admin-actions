import type { ClientSchema } from "@aws-amplify/backend"
import { a } from "@aws-amplify/backend"
import { createGroup as resource } from "./resource"

export const createGroup = a
  .mutation()
  .arguments({
    name: a.string().required(),
  })
  .authorization((allow) => [allow.group("ADMINS")])
  .handler(a.handler.function(resource))
  .returns(a.json())

const schema = a.schema({ createGroup })

export type Handler = ClientSchema<
  typeof schema
>["createGroup"]["functionHandler"]
