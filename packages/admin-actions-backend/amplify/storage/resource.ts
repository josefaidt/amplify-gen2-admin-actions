import { defineStorage } from "@aws-amplify/backend"

export const storage = defineStorage({
  name: "articles",
  access: (allow) => ({
    "drafts/*": [allow.groups(["EDITORS"]).to(["read", "write"])],
  }),
})
