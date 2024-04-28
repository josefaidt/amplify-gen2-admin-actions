import {
  CognitoIdentityProviderClient,
  ListUsersInGroupCommand,
} from "@aws-sdk/client-cognito-identity-provider"

const client = new CognitoIdentityProviderClient()

export const handler = async () => {
  // const command = new ListUsersInGroupCommand({
  //   GroupName: "",
  //   UserPoolId: env.AMPLIFYAUTH_USER_POOL_ID,
  // })
}
