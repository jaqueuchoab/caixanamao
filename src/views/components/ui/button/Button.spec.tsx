import { renderWithTheme } from '@tests/render-with-theme';
import { screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';
import { vi } from 'vitest';

describe('Button component - testes unitários', () => {
	it('deve renderizar corretamente com props padrão', () => {
		renderWithTheme(<Button>Clique em mim!</Button>);

		const button = screen.getByRole('button');
		expect(button).toBeInTheDocument();
		expect(button).toHaveTextContent(/clique em mim!/i);
	});

	it('deve ter estilos padrão corretos', () => {
		renderWithTheme(<Button>Botão Padrão</Button>);

		const button = screen.getByRole('button');
		expect(button).toHaveStyle({
			display: 'flex',
			padding: '12px 16px',
			'justify-content': 'left',
			'align-items': 'center',
			gap: '8px',
			'border-radius': '8px',
			'outline-offset': '4px',
		});
	});

	it('deve aplicar cores da variante padrão (primary) baseadas no tema padrão (dark)', () => {
		renderWithTheme(<Button>Botão Primário</Button>);

		const button = screen.getByRole('button');

		// verifica se o botão está no documento
		expect(button).toBeInTheDocument();

		// verifica as cores do tema dark para a variante primary
		expect(button).toHaveStyle({
			'background-color': '#238124',
			color: '#FDFDFD',
		});
	});

	it('deve aplicar cores corretas para todas as variantes baseadas no tema', () => {
		// testa variante danger
		const { rerender } = renderWithTheme(
			<Button variant='danger'>Botão Danger</Button>
		);
		let button = screen.getByRole('button');
		expect(button).toHaveStyle({
			'background-color': '#932525',
			color: '#FDFDFD',
		});

		// testa variante admin
		rerender(<Button variant='admin'>Botão Admin</Button>);
		button = screen.getByRole('button');
		expect(button).toHaveStyle({
			'background-color': '#164E7F',
			color: '#FDFDFD',
		});

		// testa variante neutral
		rerender(<Button variant='neutral'>Botão Neutral</Button>);
		button = screen.getByRole('button');
		expect(button).toHaveStyle({
			'background-color': 'rgba(0, 0, 0, 0)', // transparent renderizado como rgba
			color: '#FDFDFD',
		});

		// testa variante link
		rerender(<Button variant='link'>Botão Link</Button>);
		button = screen.getByRole('button');
		expect(button).toHaveStyle({
			'background-color': 'rgba(0, 0, 0, 0)',
			color: '#7EF28B',
		});
	});

	it('deve renderizar corretamente todas as variantes de botão', () => {
		const variants = ['primary', 'neutral', 'danger', 'admin', 'link'] as const;

		variants.forEach((variant) => {
			const { unmount } = renderWithTheme(
				<Button variant={variant}>Botão {variant}</Button>
			);

			const button = screen.getByRole('button');
			expect(button).toBeInTheDocument();
			expect(button).toHaveTextContent(`Botão ${variant}`);

			unmount();
		});
	});

	it('deve aplicar a prop fill_width corretamente', () => {
		renderWithTheme(<Button fill_width>Botão Largura Completa</Button>);

		const button = screen.getByRole('button');
		expect(button).toHaveStyle('width: 100%');
	});

	it('deve aplicar a prop text_align corretamente', () => {
		// testa alinhamento à esquerda
		const { rerender } = renderWithTheme(
			<Button text_align='left'>Alinhado à Esquerda</Button>
		);
		let button = screen.getByRole('button');
		expect(button).toHaveStyle('justify-content: left');

		// testa alinhamento ao centro
		rerender(<Button text_align='center'>Alinhado ao Centro</Button>);
		button = screen.getByRole('button');
		expect(button).toHaveStyle('justify-content: center');
	});

	it('deve lidar com eventos de clique corretamente', () => {
		const handleClick = vi.fn();
		renderWithTheme(<Button onClick={handleClick}>Clique em mim</Button>);

		const button = screen.getByRole('button');
		fireEvent.click(button);

		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	it('deve estar desabilitado quando a prop disabled for true', () => {
		renderWithTheme(<Button disabled>Botão Desabilitado</Button>);

		const button = screen.getByRole('button');
		expect(button).toBeDisabled();
	});

	it('deve renderizar children corretamente', () => {
		renderWithTheme(
			<Button>
				<span>Conteúdo personalizado</span>
				<strong>Texto em negrito</strong>
			</Button>
		);

		const button = screen.getByRole('button');
		expect(button).toContainHTML('<span>Conteúdo personalizado</span>');
		expect(button).toContainHTML('<strong>Texto em negrito</strong>');
	});

	it('deve passar atributos HTML do botão', () => {
		renderWithTheme(
			<Button
				type='submit'
				form='test-form'
				name='test-button'
				data-testid='custom-button'
			>
				Botão Enviar
			</Button>
		);

		const button = screen.getByRole('button');
		expect(button).toHaveAttribute('type', 'submit');
		expect(button).toHaveAttribute('form', 'test-form');
		expect(button).toHaveAttribute('name', 'test-button');
		expect(button).toHaveAttribute('data-testid', 'custom-button');
	});

	it('deve lidar com combinação de múltiplas props', () => {
		const handleClick = vi.fn();
		renderWithTheme(
			<Button
				variant='danger'
				fill_width
				text_align='left'
				onClick={handleClick}
				disabled
			>
				Perigo Largura Completa
			</Button>
		);

		const button = screen.getByRole('button');
		expect(button).toBeDisabled();
		expect(button).toHaveStyle('width: 100%');
		expect(button).toHaveStyle('justify-content: left');
		expect(button).toHaveTextContent('Perigo Largura Completa');

		fireEvent.click(button);
		expect(handleClick).not.toHaveBeenCalled(); // não deve chamar quando desabilitado
	});
});
