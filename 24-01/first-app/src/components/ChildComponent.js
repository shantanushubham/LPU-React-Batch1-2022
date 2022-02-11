import React from "react";

const ChildComponent = ({ context }) => {
  return <h3>This is a child component! {JSON.stringify(context)}</h3>;
};

export default ChildComponent;
