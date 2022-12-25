import {
  loading,
  dataLoading,
  failed,
  course_add,
  course_get,
  course_getById,
  course_delete,
  course_update,
} from "./course.type";

const initialState = {
  courseData: [],
  courseDetails: {},
  loading: false,
  error: false,
};

export const courseReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case loading: {
      return { ...state, loading: true, error: false };
    }

    case dataLoading: {
      return { ...state, loading: false, error: false, dataLoading: true };
    }

    case failed: {
      return { ...state, loading: false, error: true, dataLoading: false };
    }

    case course_get: {
      return {
        ...state,
        loading: false,
        error: false,
        dataLoading: false,
        courseData: payload,
      };
    }

    case course_getById: {
      return { ...state, loading: false, error: false, courseDetails: payload };
    }

    case course_add: {
      return { ...state, loading: false, error: false };
    }

    case course_delete: {
      return { ...state, loading: false, error: false };
    }

    case course_update: {
      return { ...state, loading: false, error: false };
    }

    default:
      return state;
  }
};
