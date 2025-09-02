import React from 'react';
import { Dispatch, SetStateAction } from 'react';
import { RadioContainer, RadioInput, RadioLabel } from './RadioInput.style';

// Usando generics baseado em string para permitir diferentes opções
type RadioProps<T extends string> = {
	// array de opções
	options: T[];
	// valor inicial
	value: T;
	// função que atualiza o valor selecionado
	onChange?: (value: T) => void;
};

const Radio = <T extends string>({ options, value, onChange }:  RadioProps<T>) => {

	return (
		<RadioContainer>
			{options.map((option) => {
				return (
					<RadioLabel key={option}>
						<RadioInput
							type='radio'
							value={option}
							checked={value === option}
							onChange={() => onChange?.(option)}
						/>
						{option}
					</RadioLabel>
				);
			})}
		</RadioContainer>
	);
};

export default Radio;
