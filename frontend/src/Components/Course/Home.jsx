import { Box, Button, Heading, Image } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import style from "./home.module.css"
import {AiOutlineFieldTime} from 'react-icons/ai';
import {BiTimer} from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import jwt_decode from "jwt-decode";

const Home = () => {

  const { loginData } = useSelector( (store) => store.User );
  const [useData, setUserData] = useState({});
//   const dispatch = useDispatch();
//   const toast = useToast();

  // -------------- (Token Decode) ---------------
  useEffect( () => {
    if(loginData){
      setUserData(jwt_decode(loginData.token))
    }
  }, [loginData])


  return (
    <div >
      {/* ---------Main Heading------ */}
      <div className={style.mainDiv}>
      <h3>TOP COURSES</h3>
      <Heading>Top Courses from Our Experts</Heading>
      <p>Learn from experienced faculties 
        with well researched and comprehensive 
        study material on all the subjects.
      </p>
      </div>

    {/* --------- Course Box ------ */}
   <div className={style.courseBox}>
      <Link to="details"><Image className={style.img} height="240px" src="http://khanglobalstudies.com/images/courses/upsc-thumb.jpg" alt="thumb" /></Link>
      <div>
        <Link to="details"><Heading mt="10" color="#3e4192">Rs. 7500/-</Heading></Link>
        <Link to="details"><Heading fontSize={27}>UPSC(I.A.S) Hindi & Hinglish medium</Heading></Link>

        <div className={style.time}>
          <Box display="flex" alignItems="center" gap="1">
          <BiTimer/>
          10 Months Duration
          </Box>

          <Box display="flex" alignItems="center" gap="1">
          <AiOutlineFieldTime/>
          18 Months Validity
          </Box>
        </div>
      </div>
      {useData.role === "admin" ? 
      <Button bg="#dc3544" color="#ffff">Delete</Button> : "" }
    </div>
      
    </div>
  )
}

export default Home;