import React, { Component } from "react";
import "./test.css";
// const Test = () => {
//   return (
//     <div>
//       <h1 id="testId">Hello, I am Shantanu</h1>
//     </div>
//   );
// };

class Test extends Component {
  render() {
    console.log("Hello");
    return (
      <div>
        <h1 id="testId">Hello, I am Shantanu</h1>
      </div>
    );
  }
}

export default Test;
