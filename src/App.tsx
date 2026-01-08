import { BrowserRouter, Route, Routes } from '@lib/router';
import './views/assets/css/style.css';
import ErrorBoundary from './views/components/ErrorBoundary';
import { ThemeContextProvider } from './views/context/ThemeContext';

import Home from './views/pages/home/Home';
import { DashboardPage } from './views/pages/dashboard';
import Vantagens from './views/pages/Vantagens';
import Fallback from './views/pages/fallback/Fallback';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GlobalStyles } from './views/styles/GlobalStyles';
import { Toaster } from './views/components/ui/toaster';
import AuthModeSelector from './views/components/authMode/AuthModeSelector';

// TODO: refatorar componentes que usam css modules para styled components

function App() {
	const queryClient = new QueryClient();
	return (
		<BrowserRouter>
			<ThemeContextProvider>
				<ErrorBoundary>
					<QueryClientProvider client={queryClient}>
						<GlobalStyles />
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/login/*" element={<AuthModeSelector />} />
							<Route path="/signup/*" element={<AuthModeSelector />} />
							<Route
								path="/dashboard/*"
								element={<DashboardPage />}
							/>
							<Route path="/benefits" element={<Vantagens />} />
							<Route path="/fallback?" element={<Fallback />} />
						</Routes>
						<Toaster />
					</QueryClientProvider>
				</ErrorBoundary>
			</ThemeContextProvider>
		</BrowserRouter>
	);
}

export default App;
