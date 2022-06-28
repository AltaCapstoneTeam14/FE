import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import EditUser from "./Components/User/EditUser"
import ShowUser from "./Components/User/ShowUser"
import 'bootstrap/dist/css/bootstrap.min.css';
import './Assets/style/main.css';
import Navbar from "./Components/Navbar/Navbar";
import LandingPage from './Pages/LandingPage/index'
import Login from "./Pages/Login/Login";
import AboutUs from './Pages/AboutUs/AboutUs'
import Faq from "./Pages/Faq/Faq";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<><Login/></>} />
          <Route path="/aboutus" element={<><AboutUs/></>} />
          <Route path="/faq" element={<><Faq/></>} />

          <Route path='/user' element={<ShowUser />}></Route>
          <Route path='/user/edit/:id' element={<EditUser />}></Route>

        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
