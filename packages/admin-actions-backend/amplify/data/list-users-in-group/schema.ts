import { a } from "@aws-amplify/backend"

export const listUsersInGroup = a
  .mutation()
  .arguments({
    groupName: a.string().required(),
  })
  .authorization((allow) => [allow.group("ADMINS")])
  .returns(a.json())
