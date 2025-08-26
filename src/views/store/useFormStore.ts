import { create } from 'zustand';

// Definindo o tipo dos dados do form de Cadastro
type FormData = {
  nome: string;
  cpf: string;
  nasc: string;
  cargo: "Colaborador" | "Administrador";
  email: string;
  senha: string;
  senha_confirmacao: string;
};

// Definindo tipo da Store
type FormStore = {
  formData: FormData;
  setField: (field: keyof FormData, value: string) => void;
  resetForm: () => void;
};

// Função de contexto global
export const useFormStore = create<FormStore>((set) => ({
  formData: {
    nome: '',
    cpf: '',
    nasc: '',
    cargo: "Colaborador",
    email: '',
    senha: '',
    senha_confirmacao: '',
  },
  setField: (field, value) => {
    set((state) => ({
      formData: {
        ...state.formData,
        [field]: value,
      },
    }));
  },
  resetForm: () => {
    set(() => ({
      formData: {
        nome: '',
        cpf: '',
        nasc: '',
        cargo: "Colaborador",
        email: '',
        senha: '',
        senha_confirmacao: '',
      },
    }));
  },
}));
