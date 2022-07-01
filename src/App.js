import React from "react";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import LandingPage from './Pages/LandingPage/index'
import Login from "./Pages/Login/Login";
import AboutUs from './Pages/AboutUs/AboutUs';
import Faq from "./Pages/Faq/Faq";
import TopUpPage from "./Pages/TopUpPage/TopUpPage";
import AddTopUp from "./Components/Top Up/AddTopUp";
import PulsaPage from "./Pages/PulsaPage/PulsaPage";
import EditPulsa from "./Components/Pulsa product/EditPulsa";
import AddPulsa from "./Components/Pulsa product/AddPulsa";
import QuotaPage from "./Pages/QuotaPage/QuotaPage";
import EditQuota from "./Components/Quota product/EditQuota";
import AddQuota from "./Components/Quota product/AddQuota";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<><Login/></>} />
          <Route path="/aboutus" element={<><AboutUs/></>} />
          <Route path="/faq" element={<><Faq/></>} />

          <Route path='/TopUpPage' element={<TopUpPage />}></Route>
          <Route path='/TopUpPage/add' element={<AddTopUp />}></Route>

          <Route path='/PulsaPage' element={<PulsaPage />}></Route>
          <Route path='/PulsaPage/add' element={<AddPulsa />}></Route>
          <Route path='/PulsaPage/edit/:id' element={<EditPulsa />}></Route>

          <Route path='/QuotaPage' element={<QuotaPage />}></Route>
          <Route path='/QuotaPage/add' element={<AddQuota />}></Route>
          <Route path='/QuotaPage/edit/:id' element={<EditQuota />}></Route>

        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
