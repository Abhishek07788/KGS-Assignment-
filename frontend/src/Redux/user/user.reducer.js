import {
  loading,
  failed,
  login_success,
  signup_success,
  logout,
  clear,
} from "./user.type";

const initialState = {
  signupData: "",
  loginData: JSON.parse(localStorage.getItem("loginData")) || "",
  loading: false,
  error: false,
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case loading: {
      return { ...state, loading: true, error: false };
    }

    case failed: {
      return { ...state, loading: false, error: true };
    }

    case signup_success: {
      return { ...state, loading: false, error: false, signupData: payload };
    }

    case login_success: {
      if (payload.status === true) {
        localStorage.setItem("loginData", JSON.stringify(payload));
      }
      return { ...state, loading: false, error: false, loginData: payload };
    }

    case clear: {
      return {
        ...state,
        loading: false,
        error: false,
        signupData: "",
        loginData: "",
      };
    }
    case logout: {
      localStorage.clear("loginData");
      return { ...state, loading: false, error: false, loginData: "" };
    }

    default:
      return state;
  }
};
