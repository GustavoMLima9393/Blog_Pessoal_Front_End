import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/estaticos/navbar/Navbar";
import Footer from "./components/estaticos/footer/Footer";
import Home from "./paginas/home/Home";
import Login from "./paginas/login/Login";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
            <Route path='/login' element={<Login />}/>
            <Route path='/home' element={<Home />}/>
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
