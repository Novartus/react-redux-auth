import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { userSignUp } from "../actions";

function Register() {
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = inputs;

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    // setSubmitted(true);
    if (name && email && password) {
      dispatch(userSignUp({ name, email, password }));
    }
  }
  return (
    <div>
      <form>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Name"
        />

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
        Sign Up
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { userSignUp })(Register);
