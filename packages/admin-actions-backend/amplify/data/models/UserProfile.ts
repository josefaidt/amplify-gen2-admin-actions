import { a } from "@aws-amplify/backend"

export const UserProfile = a
  .model({
    id: a.id(),
    sub: a
      .string()
      .required()
      .authorization((allow) => [
        allow.owner().to(["read"]),
        allow.authenticated().to(["read"]),
      ]),
    email: a
      .email()
      .required()
      .authorization((allow) => [
        allow.owner().to(["read"]),
        allow.authenticated().to(["read"]),
      ]),
  })
  .authorization((allow) => [allow.owner(), allow.authenticated().to(["read"])])
