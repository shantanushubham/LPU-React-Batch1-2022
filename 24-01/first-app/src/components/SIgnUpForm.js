import React, { useRef, useState } from "react";
import { isValidUser } from "../Validators";

const SignUpForm = () => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const passwordElement = useRef(null);

  let handleChange = (e) =>
    setState({ ...state, [e.target.name]: e.target.value });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(`The password is: ${passwordElement.current.value}`);
        if (isValidUser({ ...state })) {
          console.log("User is valid!", state);
        } else {
          setError("The user is invalid!");
          console.log("User is invalid");
        }
      }}
    >
      <label>First Name</label>
      <input
        name={"firstName"}
        type={"text"}
        onChange={handleChange}
        value={state.firstName}
        placeholder={"First Name"}
      />
      <label>Last Name</label>
      <input
        name={"lastName"}
        type={"text"}
        onChange={handleChange}
        value={state.lastName}
        placeholder={"Last Name"}
      />
      <label>Email</label>
      <input
        name={"email"}
        type={"email"}
        onChange={handleChange}
        value={state.email}
        placeholder={"Email"}
      />
      <label>Password</label>
      <input
        name={"password"}
        type={"password"}
        onChange={handleChange}
        value={state.password}
        placeholder={"Password"}
        ref={passwordElement}
      />
      <button type={`submit`}>Submit</button>
      <span style={{ color: "red" }}>{error}</span>
    </form>
  );
};

export default SignUpForm;
