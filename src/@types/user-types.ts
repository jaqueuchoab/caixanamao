export type LoginData = {
  email: string;
  senha: string;
};

/**export type LoginResponse = {
  token: string;
  user: {
    id: string;
    email: string;
  };
};**/

export type IdentificationData = {
  nome: string;
  cpf: string;
  nasc: string;
  cargo: 'Colaborador' | 'Administrador';
}

export type CredentialsData = {
  email: string;
  senha: string;
  confirmeSenha: string;
}

export type SignUpData = {
  identificacao: IdentificationData;
  credenciais: CredentialsData;
};