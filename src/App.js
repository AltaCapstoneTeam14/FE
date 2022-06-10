<<<<<<< HEAD
import LandingPage from "./Pages/LandingPage";

function App() {
  return (
    <div className="App">
      
      <LandingPage />
    </div>
=======
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Faq from "./Pages/Faq/Faq";
import Footer from "./Components/Footer/Footer"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Footer />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
>>>>>>> 29676ada7d06872d6170f2eab38a10b8a6ba7daa
  );
}

export default App;
