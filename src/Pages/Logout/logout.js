import React from 'react';
import Loading from '../../Components/Loading/Loading';
import authService from '../../Services/auth-services';

export default function Logout() {
    authService.logout();
    window.location.reload();
    return(
        <Loading/>
    )
}
