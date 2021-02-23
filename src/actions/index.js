import axios from "axios";
import * as TYPES from "./types";
import { url } from "../url";
import history from "../History";

// Register User
export const userSignUp = (signUpInput) => async (dispatch) => {
  try {
    const response = await axios({
      method: "POST",
      url: url + "api/signup",
      data: {
        name: signUpInput.name,
        email: signUpInput.email,
        password: signUpInput.password,
      },
    });
    if (response.data.success) {
      console.log("SignUp Successfully");
      history.push(process.env.PUBLIC_URL + "/login");
    }
  } catch (error) {
    console.log("Error In SignUp : src/action/index.js:", error);
    // history.push(process.env.PUBLIC_URL + "/404");
  }
};

// Login User
export const userLogin = (loginInput) => async (dispatch) => {
  try {
    const response = await axios({
      method: "POST",
      url: url + "api/login",
      data: {
        email: loginInput.email,
        password: loginInput.password,
      },
    });
    if (response.data.success) {
      await dispatch({
        type: TYPES.SET_LOGIN_STATE,
        payload: response.data,
      });
      localStorage.setItem("data", response.data.token);
      // history.push(process.env.PUBLIC_URL + "/dashboard");
    }
  } catch (error) {
    console.log("Error In Login : src/action/index.js:", error);
  }
};

// Edit Profile
export const userEdit = (editUserInput) => async (dispatch) => {
  try {
    const token = localStorage.getItem("data");
    const response = await axios({
      method: "POST",
      url: url + "api/edit",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token,
      },
      data: {
        name: editUserInput.name,
      },
    });
    if (response.data.success) {
      await dispatch({
        type: TYPES.SET_USER_STATE,
        payload: response.data,
      });
    }
  } catch (error) {
    console.log("Error In userEdit : src/action/index.js:", error);
  }
};

// User LogOut
export const userLogout = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("data");
    const response = await axios({
      method: "POST",
      url: url + "api/logout",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token,
      },
    });
    if (response) {
      localStorage.clear();
      await dispatch({
        type: TYPES.SET_LOGOUT_STATE,
        payload: response.data,
      });
    }
  } catch (error) {
    console.log("Error In LogOut : src/action/index.js:", error);
  }
};
