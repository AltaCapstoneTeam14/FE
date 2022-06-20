import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import EditUser from "./Components/User/EditUser"
import ShowUser from "./Components/User/ShowUser"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <BrowserRouter>
      <div className='container'>
        <Routes>
          <Route path='/' element={<ShowUser />}></Route>
          <Route path='edit/:id' element={<EditUser />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
