import styled from '@emotion/styled';
import { Icon } from '@phosphor-icons/react';
import { motion } from 'framer-motion';

interface SamplePageProps {
	pageTitle: string;
	Icon: Icon;
}

export const SamplePageContainer = styled(motion.div)`
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;
	gap: 10px;
`;

export function SamplePage({ pageTitle, Icon }: SamplePageProps) {
	return (
		<SamplePageContainer // motion.div com atributos motion
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.9, ease: 'easeOut', type: 'tween' }}
		>
			<Icon size={81} />
			<p style={{ maxWidth: 256, textAlign: 'center', fontWeight: 'bold' }}>
				{pageTitle}
			</p>
		</SamplePageContainer>
	);
}

/*	Página de Registros Vazia
	<FileDashed size={81} />
	<p style={{ maxWidth: 256, textAlign: 'center' }}>
		Parece que você ainda não fez nenhum registo de caixa, que tal fazer o
		primeiro?
	</p>
	<Button>Primeiro registro</Button>
*/
