import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import style from "./coursedetails.module.css";
import Banner from "../../Images/Exams-Banner.jpg";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { GiTeacher } from "react-icons/gi";
import { FaEdit } from "react-icons/fa";
import { BiTimer } from "react-icons/bi";
import { AiOutlineFieldTime } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import { useSelector } from "react-redux";
import jwt_decode from "jwt-decode";

const CourseDetails = () => {

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
    <div className={style.DetailsMainDiv}>
      <Box m="auto" justifyContent="center" display="flex" gap="4" p="2">
        <Heading>UPSC(I.A.S) Hindi & Hinglish medium</Heading>

        {/* --------- (Edit) ---------- */}
        {useData.role === "admin" ? 
        <Text cursor="pointer" color="#dc3544" fontSize={26} mt="3"> 
        <FaEdit title="Edit"/>
        </Text>: "" }
      </Box>

      <h3>The Most Trusted Learning Platform.</h3>

      <Image
        mt="10"
        w="100%"
        h={["300px", "300px", "400px", "400px"]}
        src={Banner}
        alt="banner"
      />
      <div className={style.CourseDetailsBox}>
        <div>
          <Heading mt="10" bg="rgba(0, 0, 0, 0.041)" p="4" fontSize={20}>
            <u>Overview</u>
          </Heading>

          {/* ------------------ (Description) ----------------- */}
          <Box m="auto" display="flex" gap="4">
            <Heading mt="4" pl="4" fontSize={30}>
              Course Description
            </Heading>

            {/* --------- (Edit) ---------- */}
            {useData.role === "admin" ? 
            <Text cursor="pointer" color="#dc3544" fontSize={21} mt="6">
                  <FaEdit title="Edit"/>
            </Text> : ""}
          </Box>

          <Text whiteSpace="pre-line" pl="4" lineHeight="28px" fontSize={17} fontWeight="400">
            UPSC is India's central agency which conducts exams like Civil
            Services Exam (CSE) to recruit candidates into top government
            services like IAS, IPS, IFS etc. UPSC recruits candidates to both
            civil services as well as defence services. 
            
            UPSC conducts Preliminary Examination of the Civil Services Examination for
            recruitment to the Indian Administrative Service (IAS), Indian
            Foreign Service (IFS), Indian Police Service (IPS) and other Central
            Services and posts in accordance with the Rules published by the
            Government (Department of Personnel & Training) in the Gazette of
            India Extraordinary. 
            
            This Examination is meant to serve as a screening test only; the marks obtained in the Preliminary
            Examination by the candidates, who are declared qualified for
            admission to the Main Examination, are not counted for determining
            their final order of merit. Only those candidates, who are declared
            by the Commission to have qualified in the Preliminary Examination
            in the year, will be eligible to appear at the Main Examination of
            that year provided they are otherwise eligible for admission to the
            Main Examination. The question papers (other than the literature of
            language papers) are set in Hindi and English. Candidates can apply
            online for the UPSC Examinations by accessing the online portal
            hosted on the UPSC’s website 
            <a href="https://upsconline.nic.in/">
             <b> (https://upsconline.nic.in/)</b>
            </a>
          </Text>
        </div>

        {/* ------------------ ( Course Box ) ----------------- */}
        <div className={style.CoursePreviewBox}>
          {/* --------------- (Thumbnail)-------------- */}
          <Image
            borderRadius={10}
            src="http://khanglobalstudies.com/images/courses/upsc-thumb.jpg"
            alt="thumb"
          />
          <Text
            p="2"
            color="#ffff"
            bg="blue"
            position="absolute"
            top="1"
            borderRadius={10}
            cursor="pointer"
            right="2"
          >
            <FaEdit title="Edit"/>
          </Text>

          {/* --------------- (Price) --------- */}
          <Box p="5">
            <Box className={style.BoxBottom}>
              <Text><HiOutlineCurrencyRupee /><b>Price</b></Text>
              <Box display="flex" gap={3}>
                <Heading display="flex" gap="2" color="#3e4192" fontSize={24}>
                  Rs. 7500/-
                </Heading>

                {/* --------- (Edit) ---------- */}
                {useData.role === "admin" ? 
                <Text cursor="pointer" color="#dc3544" fontSize={18} mt="1">
                  <FaEdit title="Edit"/>
                </Text> : ""}
              </Box>
            </Box>
            <hr />
            {/* --------------- (Teacher) --------- */}
            <Box className={style.BoxBottom}>
              <Text><GiTeacher /><b>Teacher</b></Text>
              <Box display="flex" gap={3}>
                <Text color="#606060" display="flex" fontSize="17" alignItems="center" gap="3">
                  <b>Khan Sir & Team</b>
                </Text>

                {/* --------- (Edit) ---------- */}
                {useData.role === "admin" ? 
                <Text cursor="pointer" color="#dc3544" fontSize={18} mt="1">
                  <FaEdit title="Edit"/>
                </Text> : "" }
              </Box>
            </Box>

            <hr />
            {/* --------------- (Duration) --------- */}
            <Box className={style.BoxBottom}>
              <Text><BiTimer /><b>Duration</b></Text>
              <Box display="flex" gap={3}>
                <Text color="#606060" display="flex" fontSize="17" alignItems="center" gap="3">
                  <b>10 Months</b>
                </Text>

                {/* --------- (Edit) ---------- */}
                {useData.role === "admin" ? 
                <Text cursor="pointer" color="#dc3544" fontSize={18} mt="1">
                  <FaEdit title="Edit"/>
                </Text> : ""}
              </Box>
            </Box>

            <hr />
            {/* --------------- (Validity) --------- */}
            <Box className={style.BoxBottom}>
              <Text ><AiOutlineFieldTime /><b>Validity</b></Text>
              <Box display="flex" gap={3}>
                <Text color="rgb(78, 76, 76)" display="flex" fontSize="17" alignItems="center" gap="3">
                  <b>18 Months</b>
                </Text>

                {/* --------- (Edit) ---------- */}
                {useData.role === "admin" ? 
                <Text cursor="pointer" color="#dc3544" fontSize={18} mt="1">
                  <FaEdit title="Edit"/>
                </Text> : "" }
              </Box>
            </Box>
            <hr />
          </Box>


          {/* ---------------- (Enroll Button) ---------- */}
          <Button 
          bg="#3e4192" 
          color="#ffff" 
          fontSize={20} 
          p="6" 
          w="90%" 
          ml="4"
          _hover={{bg:"teal"}}
          ><BsCart2 />&nbsp; Enroll Now</Button>
          <Text textAlign="center" mt="3" color="#3e4192"><b>Share This Course</b></Text>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;



{/* <video tabindex="-1" class="video-stream html5-main-video" webkit-playsinline="" playsinline="" controlslist="nodownload" style="width: 299px; height: 168px; left: 0px; top: 0px;" src="blob:https://www.youtube.com/77f18630-87ef-4546-91dd-896344b67bab"></video> */}