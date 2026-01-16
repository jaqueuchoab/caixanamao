import { Icon } from '@phosphor-icons/react';
import { Container, Infos, Value } from './styles';
import { HTMLAttributes } from 'react';
import MoneyInput from '@/views/components/ui/input/MoneyInput';

interface RegisterItemProps extends HTMLAttributes<HTMLDivElement> {
	name: string;
	editable?: boolean;
	value: number;
	error?: string;
	onChangeValue?: (value: number) => void;
	icon: Icon;
}

export function RegisterItem({
	id,
	name,
	value,
	onChangeValue,
	error,
	editable = false,
	icon: IconComponent,
	...rest
}: RegisterItemProps) {
	return (
		<Container {...rest}>
			<Infos>
				<IconComponent size={20} />
				{name}
			</Infos>
			<Value>
				<span>R$</span>
				{editable ? (
					<MoneyInput
						id={id}
						value={value}
						onChangeValue={onChangeValue}
						error={error}
					/>
				) : (
					<span className='registerItem__value'>
						{value?.toLocaleString('pt-BR', {
							minimumFractionDigits: 2,
							maximumFractionDigits: 2,
						})}
					</span>
				)}
			</Value>
		</Container>
	);
}
