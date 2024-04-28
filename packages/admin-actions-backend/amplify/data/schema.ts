import type { ClientSchema } from "@aws-amplify/backend"
import { a } from "@aws-amplify/backend"
import { UserProfile } from "./models/UserProfile"
import { addUserToGroup } from "./add-user-to-group/schema"
import { removeUserFromGroup } from "./remove-user-from-group/schema"

export const schema = a.schema({
  UserProfile,
  addUserToGroup,
  removeUserFromGroup,
})

export type Schema = ClientSchema<typeof schema>
