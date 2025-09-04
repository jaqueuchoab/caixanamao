import { create } from 'zustand';
import { CredentialsData, IdentificationData } from '../../@types/user-types';

// Definindo o tipo das etapas do form de Cadastro
type FormData = IdentificationData & CredentialsData;

// Definindo tipo da Store
type FormStore = {
  formData: FormData;
  setField: (field: keyof FormData, value: string) => void;
  resetForm: () => void;
  isIdentificationComplete: () => boolean;
  isCredentialsComplete: () => boolean;
  isComplete: () => boolean;
};

// Função de contexto global
export const useFormStore = create<FormStore>((set, get) => ({
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
  isIdentificationComplete: () => {
    const { formData } = get();
    // verifica se os campos de identificação estão preenchidos
    return (
      formData.nome.trim() !== "" &&
      formData.cpf.trim() !== "" &&
      formData.nasc.trim() !== "" &&
      formData.cargo.trim() !== ""
    );
  },
  isCredentialsComplete: () => {
    const { formData } = get();
    // verifica se os campos de credenciais estão preenchidos
    return (
      formData.email.trim() !== "" &&
      formData.senha.trim() !== "" &&
      formData.senha_confirmacao.trim() !== ""
    );
  },
  isComplete: () => {
    const { formData } = get();
    // verifica se todos os campos estão preenchidos
    return Object.values(formData).every((val) => val.trim() !== "");
  },
}));
