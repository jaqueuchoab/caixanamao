import Header from "./components/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Footer from "./components/footer/Footer";
import LoginCadastro from "./views/LoginCadastro";
import Vantagens from "./views/Vantagens";

function App() {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Header/>
          {/*Se existe login, vai direto para a dashboard, se não fica na Home*/}
          <Routes>
            <Route path="/" element = {<Home/>}></Route>
            <Route path="/login-cadastro" element = {<LoginCadastro/>}></Route>
            <Route path="/vantagens" element = {<Vantagens/>}></Route>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
