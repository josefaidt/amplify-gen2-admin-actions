import type { Handler } from "./schema"
import { env } from "$amplify/env/list-groups-for-user"
import {
  AdminListGroupsForUserCommand,
  CognitoIdentityProviderClient,
} from "@aws-sdk/client-cognito-identity-provider"

const client = new CognitoIdentityProviderClient()

export const handler: Handler = async (event) => {
  const { userId } = event.arguments
  const command = new AdminListGroupsForUserCommand({
    Username: userId,
    UserPoolId: env.AMPLIFY_AUTH_USERPOOL_ID,
  })
  const response = await client.send(command)
  return response
}
