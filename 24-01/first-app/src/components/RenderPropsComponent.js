import React from "react";

const RenderPropsComponent = (props) => {
  return (
    <div>
      <h1>This is a child component</h1>
      {props.render()}
    </div>
  );
};

export default RenderPropsComponent;
