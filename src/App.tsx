import Header from './components/header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Footer from './components/footer/Footer';
import LoginCadastro from './views/LoginCadastro';
import Vantagens from './views/Vantagens';
import { ModeContextProvider } from './context/ModeContext';

function App() {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <ModeContextProvider>
            <Header />
            {/*Se existe login, vai direto para a dashboard, se não fica na Home*/}
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route
                path="/login-registration"
                element={<LoginCadastro />}
              ></Route>
              <Route path="/benefits" element={<Vantagens />}></Route>
            </Routes>
            <Footer />
          </ModeContextProvider>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
