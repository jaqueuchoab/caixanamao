import React from 'react';
import { Dispatch, SetStateAction } from 'react';
import style from './styles/Radio.module.css';
import { RadioContainer, RadioInput, RadioLabel } from './RadioInput.style';

type RadioProps = {
	options: string[];
};

const Radio = ({ options }: RadioProps) => {
	const [position, setPosition] = React.useState<string>("");

	return (
		<RadioContainer>
			{options.map((option) => {
				return (
					<RadioLabel key={option}>
						<RadioInput
							type='radio'
							value={option}
							checked={position === option}
							onChange={({ target }) => {
								setPosition(target.value);
							}}
						/>
						{option}
					</RadioLabel>
				);
			})}
		</RadioContainer>
	);
};

export default Radio;
