import React from 'react'
import { Link } from 'react-router-dom';
import style from "./navbar.module.css";
import {Button, useToast} from "@chakra-ui/react";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import jwt_decode from "jwt-decode";
import { logoutFunc } from '../Redux/user/user.action';

const Navbar = () => {
  const { loginData } = useSelector( (store) => store.User );
  const [useData, setUserData] = useState({});
  const dispatch = useDispatch();
  const toast = useToast();

  // -------------- (Token Decode) ---------------
  useEffect( () => {
    if(loginData){
      setUserData(jwt_decode(loginData.token))
    }
  }, [loginData])


  // --------------- (Log out) -------------------
  const handleLogout = () => {
    dispatch(logoutFunc())
     // ------------ Alert---------- 
     toast({
      title: "Log out Successfully!",
      status: 'success',
      duration: 2000,
      isClosable: true,
      position:"top"
    })
  }

  return (
      <div className={style.maindiv} >
        <Link to="/"><img width="70px" src="http://khanglobalstudies.com/images/logos/kgs-logo.png" alt="KSG" /></Link>
        <div className={style.options}>
        <Link to="/"><Button>Course</Button></Link>
        <Link to="/admin"><Button>Admin</Button></Link>

        {/* ---------- (Conditional rendering) ------------*/}
        {loginData ? <>
          <Button>Hi: {useData.name}</Button>
          <Button onClick={handleLogout}>Log out</Button>
        </> 
        :
        <>
        <Link to="/login"><Button>Log in</Button></Link>
        <Link to="/signup"><Button>Sign up</Button></Link>
        </> 
        }
        </div>
      </div>
  )
}

export default Navbar