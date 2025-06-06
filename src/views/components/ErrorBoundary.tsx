import { Component, ErrorInfo, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface ErrorBoundaryProps {
	children: ReactNode;
}

interface ErrorBoundaryState {
	hasError: boolean;
	error?: Error;
	errorInfo?: ErrorInfo;
}

class ErrorBoundary extends Component<
	ErrorBoundaryProps,
	ErrorBoundaryState
> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error: Error): ErrorBoundaryState {
		return { hasError: true, error };
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
		console.error('ErrorBoundary captured an error:', error, errorInfo);
		this.setState({ errorInfo });
	}

	render() {
		const { hasError, error /* errorInfo*/ } = this.state;

		if (hasError) {
			// Redireciona para a página de fallback personalizada com a mensagem de erro
			return (
				<Navigate
					to={`/fallback?error=${encodeURIComponent(
						error?.message || 'Unknown error'
					)}`}
				/>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
