import { CreateUser } from "./types"

export const API_URL = 'https://cnm-test-api.onrender.com'

// criar/postar um usuário
export function USER_POST(body: CreateUser) {
  return {
    url: API_URL + '/users',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    }
  }
}