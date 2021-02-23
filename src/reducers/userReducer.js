import * as TYPES from "../actions/types";

const INITIAL_STATE = {
  isLoggedIn: false,
  email: "",
  name: "",
};

const statusReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.SET_LOGIN_STATE:
      const payload = {
        isLoggedIn: true,
        name: action.payload.name,
        email: action.payload.email,
      };
      return {
        ...state,
        ...payload,
      };

    case TYPES.SET_USER_STATE:
      const payload_edit = {
        // isLoggedIn: true,
        name: action.payload.name,
      };
      return {
        ...state,
        ...payload_edit,
      };

    case TYPES.SET_LOGOUT_STATE:
      const payload_logOut = {
        isLoggedIn: false,
        name: "",
        email: "",
      };
      return {
        ...state,
        ...payload_logOut,
      };

    default:
      return state;
  }
};

export default statusReducer;
