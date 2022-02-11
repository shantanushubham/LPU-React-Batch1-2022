import React, { useRef, useState } from "react";
import {
  Link,
  Outlet,
  useNavigate,
  useParams,
  useLocation,
} from "react-router-dom";
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

  let navigate = useNavigate();
  let params = useParams();
  let location = useLocation();

  let handleChange = (e) =>
    setState({ ...state, [e.target.name]: e.target.value });

  console.log(location);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(`The password is: ${passwordElement.current.value}`);
        if (isValidUser({ ...state })) {
          console.log("User is valid!", state);
          navigate("/");
        } else {
          throw new Error("User is invalid!");
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
      <Link to={"sum"}>Sum Component</Link>
      <button
        onClick={(e) => {
          // Write some code to go to sum component
          navigate("sum");
        }}
      >
        Go to Sum Component
      </button>
      <Outlet />
    </form>
  );
};

export default SignUpForm;

// Create a react app of 4 pages
// 1 is login
// 2 is signup
// 3 is profile
// 4 landing page of some company

// We can go from login to signup and vice versa
