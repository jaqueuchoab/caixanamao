import { BrowserRouter, Route, Routes } from 'src/lib/router';
import './views/assets/css/style.css';
import ErrorBoundary from './views/components/ErrorBoundary';
import { ThemeContextProvider } from './views/context/ThemeContext';

import Home from './views/pages/home/Home';
import Login from './views/pages/login/Login';
import SignUp from './views/pages/signup/SignUp';
import { Dashboard } from './views/pages/dashboard/Dashboard';
import Vantagens from './views/pages/Vantagens';
import Fallback from './views/pages/fallback/Fallback';

// TODO: refatorar componentes que usam css modules para styled components

function App() {
	return (
		<BrowserRouter>
			<ThemeContextProvider>
				<ErrorBoundary>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/login/*' element={<Login />} />
						<Route path='/signup/*' element={<SignUp />} />
						<Route path='/dashboard/*' element={<Dashboard />} />
						<Route path='/benefits' element={<Vantagens />} />
						<Route path='/fallback?' element={<Fallback />} />
					</Routes>
				</ErrorBoundary>
			</ThemeContextProvider>
		</BrowserRouter>
	);
}

export default App;
