import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import LandingPage from "./Pages/LandingPage/index"
=======
import Faq from "./Pages/Faq/Faq";
import Footer from "./Components/Footer/Footer"
import LandingPage from "./Pages/LandingPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Assets/style/main.css';
import Login from "./Pages/Login/Login";
>>>>>>> 246f6d957e7d825cc374f070d7ff30070895d147

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
<<<<<<< HEAD
          <Route path="/" element={<LandingPage />}>
          </Route>
=======
          <Route path="/" element={<Footer />} />
          <Route path="/login" element={<><Login/></>} />
          <Route path="/landing-page" element={<><LandingPage/></>} />
          <Route path="/faq" element={<><Faq/></>} />
>>>>>>> 246f6d957e7d825cc374f070d7ff30070895d147
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
