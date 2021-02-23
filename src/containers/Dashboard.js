import React from "react";
import store from "../store";

export default function Dashboard() {
  const name = store.getState().userReducer.name;

  return (
    <div>
      You Shall not pass if not authorized But if You are authorized then your
      name is {name}
    </div>
  );
}
