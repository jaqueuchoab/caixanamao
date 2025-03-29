import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './views/assets/css/style.css';
import ErrorBoundary from './views/components/ErrorBoundary';
import Vantagens from './views/components/Vantagens';
import { Dashboard } from './views/components/dashboard/Dashboard';
import Fallback from './views/components/fallback/Fallback';
import Home from './views/components/home/Home';
import Login from './views/components/login/Login';
import SignUp from './views/components/signup/SignUp';
import { ThemeContextProvider } from './views/context/ThemeContext';

function App() {
	return (
		<>
			<div className='app'>
				<BrowserRouter>
					<ThemeContextProvider>
						<ErrorBoundary>
							{/*Se existe login, vai direto para a dashboard, se não fica na Home*/}
							<Routes>
								<Route path='/' element={<Home />}></Route>
								<Route path='/login/*' element={<Login />}></Route>
								<Route path='/signup/*' element={<SignUp />}></Route>
								<Route path='/dashboard/*' element={<Dashboard />}></Route>
								<Route path='/benefits' element={<Vantagens />}></Route>
								{/*Rota coringa*/}
								<Route path='/fallback?' element={<Fallback />}></Route>
							</Routes>
						</ErrorBoundary>
					</ThemeContextProvider>
				</BrowserRouter>
			</div>
		</>
	);
}

export default App;
