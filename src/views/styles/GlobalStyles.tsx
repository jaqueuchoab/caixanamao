import { Global, css, Theme } from '@emotion/react';

export function GlobalStyles() {
	return (
		<Global
			styles={(theme: Theme) => css`
				h1 {
					color: ${theme.colors.texts.primary};
					font-size: 24px;
					font-weight: 600;
				}

				@media screen and (min-width: 768px) {
					h1 {
						font-size: 32px;
					}
				}
			`}
		/>
	);
}
