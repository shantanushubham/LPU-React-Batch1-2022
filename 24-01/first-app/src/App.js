import React, { Component } from "react";
import SignUpForm from "./components/SIgnUpForm";
import SumNumbers from "./components/SumNumbers";

// const App = () => {
//   return (
//     <div>
//       <h1>This is App Component</h1>
//       <SignUpForm />
//     </div>
//   );
// };

class App extends Component {
  constructor(props) {
    super(props);
    this.h1Element = React.createRef();
  }

  render() {
    return (
      <div>
        <h1
          ref={this.h1Element}
          onClick={() => console.log({...this.h1Element.current})}
        >
          This is App Component
        </h1>
      </div>
    );
  }
}

export default App;

///    div
//    /   \
///  Test  Test

//    section
//    /    \
//   Test  Test

//     LinkedInApp
//       /    \
//      Nav   Page
//              |
//           HomePage
