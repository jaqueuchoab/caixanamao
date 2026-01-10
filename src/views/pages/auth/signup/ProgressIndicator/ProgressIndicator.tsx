import {
	LineIndicator,
	Progress,
	ProgressDot,
} from './ProgressIndicator.style';

type ProgressIndicatorProps = {
	currentStepIndex: number;
};

export function ProgressIndicator({
	currentStepIndex,
}: ProgressIndicatorProps) {
	console.log(currentStepIndex);
	return currentStepIndex === 0 ? (
		<Progress>
			<ProgressDot $active={true}>1</ProgressDot>
			<p>Identificação</p>
			<LineIndicator $active={false} />
			<ProgressDot $active={false}>2</ProgressDot>
		</Progress>
	) : (
		<Progress>
			<ProgressDot $active={true}>1</ProgressDot>
			<LineIndicator $active={true} />
			<ProgressDot $active={true}>2</ProgressDot>
			<p>Credenciais</p>
		</Progress>
	);
}
