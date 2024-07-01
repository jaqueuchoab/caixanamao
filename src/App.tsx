import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import Home from './views/Home';
import LoginCadastro from './views/LoginCadastro';
import Vantagens from './views/Vantagens';
import { ModeContextProvider } from './context/ModeContext';
import Fallback from './components/fallback/Fallback';
import ErrorBoundary from './components/ErrorBoundary';

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
                  path="/fallback*"
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
