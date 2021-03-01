import CompAlgoCore from "./CompAlgoCore";
import React, { useImperativeHandle } from "react";

export const TestCompRef = React.forwardRef(
  // @ts-ignore
  ({ curCase, setCurCase, log }, ref) => {
    useImperativeHandle(ref, () => ({
      init,
      next,
      stop,
    }));
    console.log({ curCase, setCurCase, log });

    const init = () => {
      console.log("init");
    };

    const next = () => {
      console.log("next");
    };

    const stop = () => {
      console.log("stop");
    };

    return <div>hello</div>;
  }
);

export const Comp = (props) => {
  console.log(props);
  return <div>hello 2</div>;
};

export const TestCompRun = () => {
  const init = () => {
    console.log("init in run");
  };

  const next = () => {
    console.log("next in run");
    return true;
  };

  return (
    <CompAlgoCore defaultCase={"xxxxx"} nav={["test", "test", "test"]}>
      <Comp />
    </CompAlgoCore>
  );
};

export default TestCompRun;
