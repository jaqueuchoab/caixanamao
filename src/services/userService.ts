import { LoginData, SignUpData } from "../@types/user-types";
import { api } from "../lib/api";

export async function loginUser(data: LoginData) {
  const response = await api.post('/auth/login', data);
  return response.data;
}

export async function signUpUser(data: SignUpData) {
  const response = await api.post('users', data);
  return response.data;
}