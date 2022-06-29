import React from "react";
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import EditUser from "./Components/User/EditUser"
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './Pages/LandingPage/index'
import Login from "./Pages/Login/Login";
import AboutUs from './Pages/AboutUs/AboutUs';
import Faq from "./Pages/Faq/Faq";
import CustomerData from "./Pages/CustomerData/CustomerData";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<><Login/></>} />
          <Route path="/aboutus" element={<><AboutUs/></>} />
          <Route path="/faq" element={<><Faq/></>} />

          <Route path='/CustomerData' element={<CustomerData />}></Route>
          <Route path='/CustomerData/edit/:id' element={<EditUser />}></Route>
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
