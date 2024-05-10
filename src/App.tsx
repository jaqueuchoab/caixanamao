import Header from "./components/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Header/>
          {/*Se existe login, vai direto para a dashboard, se não fica na Home*/}
          <Routes>
            <Route path="/" element = {<Home/>}></Route>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
