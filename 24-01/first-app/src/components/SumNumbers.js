import React, { Component } from "react";
import { connect } from "react-redux";
import { testAPI } from "../apis/testApi";

class SumNumbers extends Component {
  state = {
    firstNumber: 0,
    secondNumber: 0,
    sum: 0,
    sumString: "The component has not updated the state!",
  };

  componentDidMount() {
    console.log("We are in Component Did Mount of SumNumbers");
    testAPI(5, 6).then((sum) => {
      this.setSum(sum);
    });
  }

  // componentDidUpdate() {
  //   console.log("Component has updated!");
  //   this.setState({
  //     ...this.state,
  //     sumString: `The sum is: ${this.state.sum}`,
  //   });
  // }

  setSum = (sum) => {
    if (typeof sum !== "undefined") {
      this.setState({ ...this.state, sum });
    } else {
      this.setState({
        ...this.state,
        sum: this.state.firstNumber + this.state.secondNumber,
      });
    }
  };

  render() {
    return (
      <div>
        <input
          type="number"
          placeholder="Enter first Number"
          onChange={(e) => {
            this.setState({
              ...this.state,
              firstNumber: parseInt(e.target.value),
            });
          }}
          value={this.state.firstNumber}
        />
        <input
          type="number"
          placeholder="Enter second Number"
          onChange={(e) => {
            this.setState({
              ...this.state,
              secondNumber: parseInt(e.target.value),
            });
          }}
          value={this.state.secondNumber}
        />
        <button onClick={(e) => this.setSum()}>Add Numbers</button>
        <h3>{this.state.sumString}</h3>
        <h1>The count is: {this.props.count}</h1>
      </div>
    );
  }
}

export default connect((state) => ({ count: state.count }))(SumNumbers);
