import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import store from "../store/index";
import { userLogin } from "../actions";
import { Redirect } from "react-router-dom";

function Login() {
  const isLoggedIn = store.getState().userReducer.isLoggedIn;
  const [redirect, setRedirect] = useState(false); // your state value to manipulate
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputs;

  useEffect(() => {
    if (isLoggedIn) {
      setRedirect(true);
    }
  }, [isLoggedIn]);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    // setSubmitted(true);
    if (email && password) {
      dispatch(userLogin({ email, password }));
    }
  }

  if (redirect) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div>
      <form>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Email"
        />

        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Password"
        />
      </form>
      <button type="submit" onClick={handleSubmit}>
        Sign In
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { userLogin })(Login);
