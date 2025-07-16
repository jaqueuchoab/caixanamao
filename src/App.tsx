import { BrowserRouter, Route, Routes } from '@lib/router';
import './views/assets/css/style.css';
import ErrorBoundary from './views/components/ErrorBoundary';
import { ThemeContextProvider } from './views/context/ThemeContext';

import Home from './views/pages/home/Home';
import Login from './views/pages/login/Login';
import SignUp from './views/pages/signup/SignUp';
import { DashboardPage } from './views/pages/dashboard';
import Vantagens from './views/pages/Vantagens';
import Fallback from './views/pages/fallback/Fallback';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// TODO: refatorar componentes que usam css modules para styled components

function App() {
	const queryClient = new QueryClient();
	return (
		<BrowserRouter>
			<ThemeContextProvider>
				<ErrorBoundary>
					<QueryClientProvider client={queryClient}>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/login/*' element={<Login />} />
							<Route path='/signup/*' element={<SignUp />} />
							<Route path='/dashboard/*' element={<DashboardPage />} />
							<Route path='/benefits' element={<Vantagens />} />
							<Route path='/fallback?' element={<Fallback />} />
						</Routes>
					</QueryClientProvider>
				</ErrorBoundary>
			</ThemeContextProvider>
		</BrowserRouter>
	);
}

export default App;
