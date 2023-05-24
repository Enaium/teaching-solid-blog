import { useNavigate } from "@solidjs/router"
import { Api } from "../__generated"
import { useSessionStore } from "../store"

// Create an instance of the API
export const api = new Api(async ({ uri, method, body }) => {
  // Get the user's token from the store
  const token = useSessionStore().token as string | undefined
  // Call the API
  const response = await fetch(`http://localhost:8080${uri}`, {
    method,
    body: body !== undefined ? JSON.stringify(body) : undefined,
    headers: {
      "content-type": "application/json;charset=UTF-8",
      ...(token !== undefined && token !== "" ? { token } : {})
    }
  })

  // If the response is not 200, throw an error
  if (response.status !== 200) {
    throw await response.text()
  }
  // Get the response text
  const text = await response.text()
  // If the response is empty, return null
  if (text.length === 0) {
    return null
  }
  // Parse the response text as JSON
  return JSON.parse(text)
})
