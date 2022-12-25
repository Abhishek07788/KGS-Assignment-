import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const AuthRoute = ({children}) => {
  const { loginData } = useSelector( (store) => store.User );
    return (loginData.token) ? children : <Navigate to="/login"/>
}

export default AuthRoute;