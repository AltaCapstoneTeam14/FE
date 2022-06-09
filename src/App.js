import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Faq from "./Pages/Faq/Faq";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Faq />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
