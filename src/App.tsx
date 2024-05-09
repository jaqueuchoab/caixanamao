import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Header/>
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
