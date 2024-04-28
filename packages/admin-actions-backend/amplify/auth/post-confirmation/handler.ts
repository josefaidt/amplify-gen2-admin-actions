import type { PostConfirmationTriggerHandler } from "aws-lambda"

export const handler: PostConfirmationTriggerHandler = async (event) => {
  console.log("event", JSON.stringify(event))
  // ...
  return event
}
