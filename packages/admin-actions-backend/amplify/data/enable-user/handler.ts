import type { Handler } from "./schema"
import { env } from "$amplify/env/enable-user"
import {
  AdminEnableUserCommand,
  CognitoIdentityProviderClient,
} from "@aws-sdk/client-cognito-identity-provider"

const client = new CognitoIdentityProviderClient()

export const handler: Handler = async (event) => {
  const { userId } = event.arguments
  const command = new AdminEnableUserCommand({
    Username: userId,
    UserPoolId: env.AMPLIFY_AUTH_USERPOOL_ID,
  })
  const response = await client.send(command)
  return response
}
