import React from "react";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import LandingPage from './Pages/LandingPage/index'
import Login from "./Pages/Login/Login";
import AboutUs from './Pages/AboutUs/AboutUs';
import Faq from "./Pages/Faq/Faq";
import TopUpPage from "./Pages/TopUpPage/TopUpPage";
import EditTopUp from "./Components/Top Up/EditTopUp";
import AddTopUp from "./Components/Top Up/AddTopUp";
import PulsaPage from "./Pages/PulsaPage/PulsaPage";
import EditPulsa from "./Components/Pulsa product/EditPulsa";
import AddPulsa from "./Components/Pulsa product/AddPulsa";
import QuotaPage from "./Pages/QuotaPage/QuotaPage";
import EditQuota from "./Components/Quota product/EditQuota";
import AddQuota from "./Components/Quota product/AddQuota";
import CashOutPage from "./Pages/CashOut Page/CashOutPage";
import EditCashOut from "./Components/CashOut product/EditCashOut";
import AddCashOut from "./Components/CashOut product/AddCashOut";
import PrivateRoute from "./Components/Private/PrivateRoute";
import SubscribePage from "./Pages/SubscribePage/SubscribePage"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<><Login/></>} />
          <Route path="/aboutus" element={<><AboutUs/></>} />
          <Route path="/faq" element={<><Faq/></>} />

          <Route element={<PrivateRoute/>}>
            <Route path='/TopUpPage' element={<TopUpPage />}></Route>
            <Route path='/TopUpPage/add' element={<AddTopUp />}></Route>
            <Route path='/TopUpPage/edit/:id' element={<EditTopUp />}></Route>

            <Route path='/PulsaPage' element={<PulsaPage />}></Route>
            <Route path='/PulsaPage/add' element={<AddPulsa />}></Route>
            <Route path='/PulsaPage/edit/:id' element={<EditPulsa />}></Route>

            <Route path='/QuotaPage' element={<QuotaPage />}></Route>
            <Route path='/QuotaPage/add' element={<AddQuota />}></Route>
            <Route path='/QuotaPage/edit/:id' element={<EditQuota />}></Route>

            <Route path='/CashOutPage' element={<CashOutPage />}></Route>
            <Route path='/CashOutPage/add' element={<AddCashOut />}></Route>
            <Route path='/CashOutPage/edit/:id' element={<EditCashOut />}></Route>

            <Route path='/SubscribePage' element={<SubscribePage />}></Route>

          </Route>
          
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
