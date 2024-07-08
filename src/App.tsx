import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import Home from './views/components/home/Home';
import LoginCadastro from './views/components/loginCadastro/LoginCadastro';
import Vantagens from './views/components/Vantagens';
import { ModeContextProvider } from './views/context/ModeContext';
import Fallback from './views/components/fallback/Fallback';
import ErrorBoundary from './views/components/ErrorBoundary';

function App() {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <ModeContextProvider>
            <ErrorBoundary>
              {/*Se existe login, vai direto para a dashboard, se não fica na Home*/}
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route
                  path="/login-registration"
                  element={<LoginCadastro />}
                ></Route>
                <Route path="/benefits" element={<Vantagens />}></Route>
                {/*Rota coringa*/}
                <Route
                  path="/fallback?"
                  element={<Fallback/>}
                ></Route>
              </Routes>
            </ErrorBoundary>
          </ModeContextProvider>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
