import { Icon } from '@phosphor-icons/react';
import { Container, Infos, Value } from './RegisterItem.styles';
import { HTMLAttributes } from 'react';

interface RegisterItemProps extends HTMLAttributes<HTMLDivElement> {
	name: string;
	value: number;
	icon: Icon;
}

export function RegisterItem({
	name,
	value,
	icon: IconComponent,
	...rest
}: RegisterItemProps) {
	return (
		<Container {...rest}>
			<Infos>
				<IconComponent size={24} />
				{name}
			</Infos>
			<Value>
				<span className='registerItem__currency'>R$</span>
				<span className='registerItem__value'>
					{value.toFixed(2).replace('.', ',')}
				</span>
			</Value>
		</Container>
	);
}
