import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './views/assets/css/style.css';
import ErrorBoundary from './views/components/ErrorBoundary';
import { ThemeContextProvider } from './views/context/ThemeContext';

import { mainRoutes } from './routes/main-routes';

function App() {
	return (
		<>
			<div className='app'>
				<BrowserRouter>
					<ThemeContextProvider>
						<ErrorBoundary>
							<Routes>
								{mainRoutes.map((route) => {
									return (
										<Route
											path={route.path}
											element={route.element}
											key={route.path}
										/>
									);
								})}
							</Routes>
						</ErrorBoundary>
					</ThemeContextProvider>
				</BrowserRouter>
			</div>
		</>
	);
}

export default App;
