import { Box, Button, Heading, Image, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import style from "./CSS/home.module.css";
import { AiOutlineFieldTime } from "react-icons/ai";
import { BiTimer } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import {
  deleteCourseAction,
  getCourseAction,
} from "../../Redux/course/course.action";

const Home = () => {
  const { loginData } = useSelector((store) => store.User);
  const { courseData, loading, error, dataLoading } = useSelector((store) => store.Course);
  const [useData, setUserData] = useState({});
  const dispatch = useDispatch();
  const toast = useToast();

  // -------------- (Token Decode) ---------------
  useEffect(() => {
    if (loginData) {
      setUserData(jwt_decode(loginData.token));
    }
  }, [loginData]);

  // -------------- (get course Data) -----------
  useEffect(() => {
    handleShowData();
  }, []);

  // -------------- ( show course ) -----------
  const handleShowData = () => {
    dispatch(getCourseAction());
  };

  // -------------- ( delete course ) -----------
  const handleDeleteCourse = (id) => {
    dispatch(deleteCourseAction(id));
    setTimeout(()=>{
    handleShowData();
    },500)
    // ------------ Alert----------
    toast({
      title: "Course Deleted👍",
      status: "success",
      duration: 2000,
      isClosable: true,
      position: "top",
    });
  };

  return (
    <div>
      {/* ---------Main Heading------ */}
      <div className={style.mainDiv}>
        <h3>TOP COURSES</h3>
        <Heading>Top Courses from Our Experts</Heading>
        <p>
          Learn from experienced faculties with well researched and
          comprehensive study material on all the subjects.
        </p>
      </div>

          {/* -------------- ( Api Error ) --------------- */}
          {error ? <Heading color="red">Server error...</Heading> : ""}
          {/* -------------- ( data loading ) --------------- */}
          {dataLoading ? <Heading color="teal">Loading...</Heading> : ""}

      {/* --------- Course Box ------ */}
      {courseData &&
        courseData.map((el) => (
          <div key={el._id} className={style.courseBox}>
            <Link to={`/details/${el._id}`}>
              <Image
                className={style.img}
                height="240px"
                src={el.thumbnail}
                alt="thumb"
              />
            </Link>
            <div>
              <Link to={`/details/${el._id}`}>
                <Heading mt="10" color="#3e4192">
                  Rs. {el.price}/-
                </Heading>
              </Link>
              <Link to={`/details/${el._id}`}>
                <Heading fontSize={27}>{el.title}</Heading>
              </Link>

              <div className={style.time}>
                <Box display="flex" alignItems="center" gap="1">
                  <BiTimer />
                  {el.duration} Duration
                </Box>

                <Box display="flex" alignItems="center" gap="1">
                  <AiOutlineFieldTime />
                  {el.validity} Validity
                </Box>
              </div>
            </div>

            {loginData ? 
            (useData.role === "admin" ? (
              <Button
                onClick={() => handleDeleteCourse(el._id)}
                bg="#dc3544"
                color="#ffff"
              >
                {loading ? "loading.." : "Delete"}
              </Button>
            ) : (
              ""
            )) : ""}
          </div>
        ))}
    </div>
  );
};

export default Home;
