import React from "react";
import Test from "./Test";

const App = () => {
  return (
    <div>
      <Test key={1} />
      <Test key={2} />
      <Test key={3} />
      <Test key={4} />
      <Test key={5} />
      <Test key={6} />
      <Test key={7} />
    </div>
  );
};

export default App;

///    div
//    /   \
///  Test  <Test>

//    section
//    /    \
//   Test  Test
