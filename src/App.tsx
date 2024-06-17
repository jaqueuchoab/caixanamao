import Header from './components/header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Footer from './components/footer/Footer';
import LoginCadastro from './views/LoginCadastro';
import Vantagens from './views/Vantagens';
import { ModeContextProvider } from './context/ModeContext';
import Fallback from './components/fallback/Fallback';

function App() {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <ModeContextProvider>
            {/*Se existe login, vai direto para a dashboard, se não fica na Home*/}
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route
                path="/login-registration"
                element={<LoginCadastro />}
              ></Route>
              <Route path="/benefits" element={<Vantagens />}></Route>
              {/*Rota de teste do fallback*/}
              <Route path="/fallback" element={<Fallback mode='light' errorMessage='404: Página nao encontrada.'/>}></Route>
            </Routes>
          </ModeContextProvider>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
