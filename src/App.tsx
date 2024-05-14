import Header from "./components/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Header/>
          {/*Se existe login, vai direto para a dashboard, se não fica na Home*/}
          <Routes>
            <Route path="/" element = {<Home/>}></Route>
            {/*Adicionar rota de login-cadastro e vantagens*/}
          </Routes>
          {/*Fizar footer no rodapé da página*/}
          <Footer/>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
