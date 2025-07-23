import { api } from "../lib/api";

export type LoginData = {
  email: string;
  password: string;
};

export type LoginResponse = {
  token: string;
  user: {
    id: string;
    email: string;
  };
};

export async function loginUser(data: LoginData) {
  const response = await api.post<LoginResponse>('/auth/login', data);
  return response.data;
}

