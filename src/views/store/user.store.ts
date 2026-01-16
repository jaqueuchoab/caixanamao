import { User } from '@/models/user.model';
import { create } from 'zustand';

const initialUser: User = {
	nome: '',
	cpf: '',
	nasc: new Date(),
	id_cargo: 1,
	email: '',
	senha: '',
	ativo: true,
	atualizado_em: new Date(),
	criado_em: new Date(),
	id_empresa: null,
	iduser: '',
};

type UserStore = {
	user: User;

	setUserField: <K extends keyof User>(field: K, value: User[K]) => void;
	setUser: (user: Partial<User>) => void;
	reset: () => void;
};

export const useUserStore = create<UserStore>()((set) => ({
	user: initialUser,

	setUserField: (field, value) =>
		set((state) => ({
			user: { ...state.user, [field]: value },
		})),

	setUser: (user) =>
		set((state) => ({
			user: { ...state.user, ...user },
		})),

	reset: () =>
		set(() => ({
			user: initialUser,
		})),
}));
