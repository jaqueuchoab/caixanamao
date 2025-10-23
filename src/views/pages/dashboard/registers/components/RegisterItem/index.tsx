import { Icon } from '@phosphor-icons/react';
import { Container, Infos, Value } from './styles';
import { HTMLAttributes, useId } from 'react';
import Input from '@/views/components/ui/input/Input';

interface RegisterItemProps extends HTMLAttributes<HTMLDivElement> {
	name: string;
	editable?: boolean;
	value: number;
	error?: string;
	onChangeValue?: (value: number) => void;
	icon: Icon;
}

export function RegisterItem({
	name,
	value,
	onChangeValue,
	error,
	editable = false,
	icon: IconComponent,
	...rest
}: RegisterItemProps) {
	const id = useId();
	return (
		<Container {...rest}>
			<Infos>
				<IconComponent size={24} />
				{name}
			</Infos>
			<Value>
				<span className="registerItem__currency">R$</span>
				{editable ? (
					<Input
						id={id}
						value={value ?? 0}
						onChange={(e) =>
							onChangeValue?.(Number(e.target.value))
						}
						inputMode="decimal"
						type="number"
						error={error}
					/>
				) : (
					<span className="registerItem__value">
						{value.toFixed(2).replace('.', ',')}
					</span>
				)}
			</Value>
		</Container>
	);
}
