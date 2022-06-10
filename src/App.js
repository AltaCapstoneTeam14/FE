import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Faq from "./Pages/Faq/Faq";
import Footer from "./Components/Footer/Footer"
import LandingPage from "./Pages/LandingPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Assets/style/main.css';
import Login from "./Pages/Login/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Footer />} />
          <Route path="/login" element={<><Login/></>} />
          <Route path="/landing-page" element={<><LandingPage/></>} />
          <Route path="/faq" element={<><Faq/></>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
