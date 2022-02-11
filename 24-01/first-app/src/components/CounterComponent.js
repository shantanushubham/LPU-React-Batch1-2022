import React, { useReducer } from "react";

const countReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      if (state.count + action.payload >= 3) {
        throw new Error("Count cannot be greater than 3");
      }
      return { count: state.count + action.payload }; // setState({ count: state.count + 1 });
    case "decrement":
      return { count: state.count - action.payload };
    default:
      return state;
  }
};

const CounterComponent = () => {
  const [state, dispatch] = useReducer(countReducer, { count: 0 });

  return (
    <div>
      <h1>The count is {state.count}</h1>
      <button onClick={() => dispatch({ type: "increment", payload: 2 })}>
        Increase
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 2 })}>
        Decrease
      </button>
    </div>
  );
};

export default CounterComponent;

// useReducer is a function that takes 2 arguments.
// 1. A reducer function
// 2. An initial value of state

// useReducer returns an array of 2 values.
// 1. The current state
// 2. A dispatch function

// A reducer function controls how the state will be changed given a certain action

// An action is an object!
// It has 2 key value pairs
// 1. type: a string that defines what action is being performed
// 2. payload: an object/value that contains the data that will be used to update the state (optional)
// const [name, setName]  = useState("")
// {type: "updateName", payload: "Rahul"}

// Use useEffect and useReducer Task
// {productID: 123, name: , price: , gst:, totalPayable: }
// Create an array of products
// 1. In a component, show the list of all products using useEffect simulating API
// 2. Use useReducer to add, update and remove a product using the productID
// (Hints: Think of using a object instead of an array, learn splice() in JS, use spread operator)
// 3. If you cannot do this using useReducer do it using useState.
// 4. Use a form to add a new product!
