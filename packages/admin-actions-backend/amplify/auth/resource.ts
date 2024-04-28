import { defineAuth } from "@aws-amplify/backend"
import { GROUPS } from "../constants"
import { addUserToGroup } from "../data/add-user-to-group/resource"
import { listUsersInGroup } from "../data/list-users-in-group/resource"
import { postConfirmation } from "./post-confirmation/resource"
import { removeUserFromGroup } from "../data/remove-user-from-group/resource"
import { createGroup } from "../data/create-group/resource"
import { deleteGroup } from "../data/delete-group/resource"

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
  },
  groups: Object.values(GROUPS),
  triggers: {
    postConfirmation,
  },
  userAttributes: {
    nickname: {
      mutable: true,
      required: true,
    },
  },
  access: (allow) => [
    allow.resource(addUserToGroup).to(["addUserToGroup"]),
    allow.resource(removeUserFromGroup).to(["removeUserFromGroup"]),
    allow.resource(createGroup).to(["manageGroups"]),
    allow.resource(deleteGroup).to(["manageGroups"]),
  ],
})
