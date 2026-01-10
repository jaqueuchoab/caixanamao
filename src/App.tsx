import { BrowserRouter, Route, Routes } from '@lib/router';
import './views/assets/css/style.css';
import ErrorBoundary from './views/components/ErrorBoundary';
import { ThemeContextProvider } from './views/context/ThemeContext';

import Home from './views/pages/home/Home';
import { DashboardPage } from './views/pages/dashboard';
import Fallback from './views/pages/fallback/Fallback';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GlobalStyles } from './views/styles/GlobalStyles';
import { Toaster } from './views/components/ui/toaster';
import { LoginPage } from './views/pages/auth/login';
import { SignupPage } from './views/pages/auth/signup';

function App() {
	const queryClient = new QueryClient();
	return (
		<BrowserRouter>
			<ThemeContextProvider>
				<ErrorBoundary>
					<QueryClientProvider client={queryClient}>
						<GlobalStyles />
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/auth/login' element={<LoginPage />} />
							<Route
								path='/auth/signup'
								element={<SignupPage />}
							/>
							<Route
								path='/dashboard/*'
								element={<DashboardPage />}
							/>
							<Route path='/fallback?' element={<Fallback />} />
						</Routes>
						<Toaster />
					</QueryClientProvider>
				</ErrorBoundary>
			</ThemeContextProvider>
		</BrowserRouter>
	);
}

export default App;
