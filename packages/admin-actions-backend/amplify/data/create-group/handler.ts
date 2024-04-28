import type { Handler } from "./schema"
import { env } from "$amplify/env/create-group"
import {
  CreateGroupCommand,
  CognitoIdentityProviderClient,
} from "@aws-sdk/client-cognito-identity-provider"

const client = new CognitoIdentityProviderClient()

export const handler: Handler = async (event) => {
  const { name } = event.arguments
  const command = new CreateGroupCommand({
    GroupName: name,
    UserPoolId: env.AMPLIFY_AUTH_USERPOOL_ID,
  })
  const response = await client.send(command)
  return response
}
