import { FormStep } from '@/@types/form-step';
import {
	createContext,
	Dispatch,
	PropsWithChildren,
	SetStateAction,
	useContext,
	useState,
} from 'react';
import { DateRangeStep } from '../pages/dashboard/registers/new/steps/DateRangeStep';
import { CardFillStep } from '../pages/dashboard/registers/new/steps/CardFillStep';
import { EndSummaryStep } from '../pages/dashboard/registers/new/steps/EndSummaryStep';

type RegisterStepsContextType = {
	steps: FormStep[];
	setSteps: Dispatch<SetStateAction<FormStep[]>>;
	daysDiff: number;
	handleSetDaysDiff: (daysDiff: number) => void;
};

const RegisterStepsContext = createContext<
	RegisterStepsContextType | undefined
>(undefined);

const INITIAL_STEPS = [
	{
		// definicao de intervalo de datas
		number: 0,
		title: 'Data de Início e Fim',
		step: <DateRangeStep />,
	},
	{
		// requer pelo menos o primeiro step
		number: 1,
		title: 'Data 1',
		step: <CardFillStep />,
	},
];

const END_STEP = {
	// definicao de intervalo de datas
	title: 'Resumo do Registro',
	step: <EndSummaryStep />,
};

export const RegisterStepsContextProvider = ({
	children,
}: PropsWithChildren) => {
	const [daysDiff, setDaysDiff] = useState(0);
	const [steps, setSteps] = useState<FormStep[]>(INITIAL_STEPS);

	// atualiza a diferença de dias e adiciona novos steps dinamicamente
	function handleSetDaysDiff(daysDiff: number) {
		setDaysDiff(daysDiff);

		const cardSteps = Array.from({ length: daysDiff - 1 }, (_, idx) => {
			return {
				number: idx + 2,
				title: `Data #${idx + 2}`,
				step: CardFillStep,
			};
		});

		const steps = [
			...INITIAL_STEPS,
			...cardSteps,
			{ ...END_STEP, number: cardSteps.length + 1 },
		];

		setSteps(steps);
	}

	return (
		<RegisterStepsContext.Provider
			value={{ steps, setSteps, daysDiff, handleSetDaysDiff }}
		>
			{children}
		</RegisterStepsContext.Provider>
	);
};

export const useRegisterStepsContext = () => {
	const context = useContext(RegisterStepsContext);

	if (!context) {
		throw new Error(
			'useRegisterStepsContext ser chamado dentro de um RegisterStepsContextProvider',
		);
	}

	return context;
};
