import {
  loading,
  failed,
  dataLoading,
  course_add,
  course_get,
  course_getById,
  course_delete,
  course_update,
} from "./course.type";
import axios from "axios";

// ------------ (Add new course) ----------------
export const addCourseAction = (form) => async (dispatch) => {
  dispatch({ type: loading });
  try {
    const res = await axios.post("http://localhost:8080/course", form);
    dispatch({ type: course_add });
  } catch (e) {
    dispatch({ type: failed });
  }
};

// ------------ (get course) ----------------
export const getCourseAction = () => async (dispatch) => {
  dispatch({ type: dataLoading });
  try {
    const res = await axios.get("http://localhost:8080/course");
    dispatch({ type: course_get, payload: res.data });
  } catch (e) {
    dispatch({ type: failed });
  }
};

// ------------ (get course by id) ----------------
export const getCourseByIdAction = (id) => async (dispatch) => {
  dispatch({ type: loading });
  try {
    const res = await axios.get(`http://localhost:8080/course/${id}`);
    dispatch({ type: course_getById, payload: res.data });
  } catch (e) {
    dispatch({ type: failed });
  }
};

// ------------ (delete course) ----------------
export const deleteCourseAction = (id) => async (dispatch) => {
  dispatch({ type: loading });
  try {
    const res = await axios.delete(`http://localhost:8080/course/${id}`);
    dispatch({ type: course_delete });
  } catch (e) {
    dispatch({ type: failed });
  }
};

// ------------ (update course) ----------------
export const updateCourseAction = (id, cred) => async (dispatch) => {
  console.log("id, cred: ", id, cred);
  dispatch({ type: loading });
  try {
    const res = await axios.patch(
      `http://localhost:8080/course/update/${id}`,
      cred
    );
    dispatch({ type: course_update });
  } catch (e) {
    dispatch({ type: failed });
  }
};

// // ------------ (Clear) ----------------
// export const ClearFunc = () => ({ type: clear });
