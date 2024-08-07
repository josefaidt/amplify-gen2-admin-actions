import type { Handler } from "./schema"
import { env } from "$amplify/env/list-users-in-group"
import {
  ListUsersInGroupCommand,
  CognitoIdentityProviderClient,
} from "@aws-sdk/client-cognito-identity-provider"

const client = new CognitoIdentityProviderClient()

export const handler: Handler = async (event) => {
  const { groupName } = event.arguments
  const command = new ListUsersInGroupCommand({
    GroupName: groupName,
    UserPoolId: env.AMPLIFY_AUTH_USERPOOL_ID,
  })
  const response = await client.send(command)
  return response
}
