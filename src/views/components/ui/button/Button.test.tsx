import { renderWithTheme } from '@tests/render-with-theme';
import { screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
	it('should render correctly', () => {
		renderWithTheme(<Button>Click me!</Button>);

		const button = screen.getByRole('button');
		expect(button).toBeInTheDocument();
		expect(button).toHaveTextContent(/click me!/i);
	});
});
