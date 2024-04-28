import type { Handler } from "./schema"
import { env } from "$amplify/env/delete-group"
import {
  DeleteGroupCommand,
  CognitoIdentityProviderClient,
} from "@aws-sdk/client-cognito-identity-provider"

const client = new CognitoIdentityProviderClient()

export const handler: Handler = async (event) => {
  const { name } = event.arguments
  const command = new DeleteGroupCommand({
    GroupName: name,
    UserPoolId: env.AMPLIFY_AUTH_USERPOOL_ID,
  })
  const response = await client.send(command)
  return response
}
