import React from 'react'
import { Navigate, Outlet } from "react-router-dom";
import authService from "../../Services/auth-services";

export default function PrivateRoute() {
    const user = authService.getCurrentUser();
    let auth = false
    if (user) {
        auth = true
    }
    return auth ? <Outlet/> : <Navigate to="/" />;
}