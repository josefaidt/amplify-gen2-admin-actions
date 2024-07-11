import type { ClientSchema } from "@aws-amplify/backend"
import { a } from "@aws-amplify/backend"
import { UserProfile } from "./models/UserProfile"
import { schema as addUserToGroup } from "./add-user-to-group/schema"
import { schema as removeUserFromGroup } from "./remove-user-from-group/schema"
import { schema as listUsersInGroup } from "./list-users-in-group/schema"
import { schema as createGroup } from "./create-group/schema"
import { schema as deleteGroup } from "./delete-group/schema"
import { schema as disableUser } from "./disable-user/schema"
import { schema as listGroupsForUser } from "./list-groups-for-user/schema"
import { schema as enableUser } from "./enable-user/schema"

export const schema = a.combine([
  a.schema({
    UserProfile,
  }),
  addUserToGroup,
  removeUserFromGroup,
  listUsersInGroup,
  createGroup,
  deleteGroup,
  disableUser,
  enableUser,
  listGroupsForUser,
])

export type Schema = ClientSchema<typeof schema>
