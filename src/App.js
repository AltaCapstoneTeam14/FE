import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Faq from "./Pages/Faq/Faq";
import Footer from "./Components/Footer/Footer"
import Navbar from "./Components/Navbar/Navbar";
import LandingPage from "./Pages/LandingPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Assets/style/main.css';
import Login from "./Pages/Login/Login";
import AboutUs from './Pages/AboutUs/AboutUs'


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<><Login/></>} />
          <Route path="/aboutus" element={<><AboutUs/></>} />
          <Route path="/faq" element={<><Faq/></>} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
