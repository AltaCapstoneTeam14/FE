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
  );
}

export default App;
