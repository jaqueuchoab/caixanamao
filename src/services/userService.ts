import { LoginData } from "../@types/user-types";
import { api } from "../lib/api";

export async function loginUser(data: LoginData) {
  const response = await api.post('/auth/login', data);
  return response.data;
}

