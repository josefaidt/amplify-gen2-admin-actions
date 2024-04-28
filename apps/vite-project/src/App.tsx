import type { Schema } from "admin-actions-backend/schema"
import { Authenticator } from "@aws-amplify/ui-react"
import "@aws-amplify/ui-react/styles.css"
import config from "admin-actions-backend/config"
import { signUp } from "aws-amplify/auth"
import { generateClient } from "aws-amplify/api"
import { Amplify } from "aws-amplify"

Amplify.configure(config)

const client = generateClient<Schema>()

export default function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user?.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  )
}
