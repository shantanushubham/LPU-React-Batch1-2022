import React from "react";
import RenderPropsComponent from "./RenderPropsComponent";
import { useCookies } from "react-cookie";

const SampleRenderProps = () => {
  const [cookies] = useCookies(["name"]);
  console.log(cookies);
  return (
    <RenderPropsComponent
      render={() => {
        return (
          <div>
            <h2
              onClick={(e) => {
                cookies.getAll();
              }}
            >
              This is from render props
            </h2>
          </div>
        );
      }}
    />
  );
};

export default SampleRenderProps;
