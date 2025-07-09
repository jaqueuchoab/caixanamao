import { Dispatch, SetStateAction } from 'react';
import style from './styles/Radio.module.css';

type RadioProps = {
	options: string[];
	value: string;
	setValue: Dispatch<SetStateAction<string>>;
};

const Radio = ({ options, value, setValue, ...props }: RadioProps) => {
	return (
		<>
			{options.map((option) => {
				return (
					<label key={option} className={style.radio}>
						<input
							{...props}
							type='radio'
							value={option}
							checked={value === option}
							onChange={({ target }) => {
								setValue(target.value);
							}}
						/>{' '}
						{option}
					</label>
				);
			})}
		</>
	);
};

export default Radio;
