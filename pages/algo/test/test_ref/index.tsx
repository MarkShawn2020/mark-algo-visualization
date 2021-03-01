import React, { useImperativeHandle, useRef } from "react";
import { Button, message } from "antd";

let TestRefSub = (props, ref) => {
  useImperativeHandle(ref, () => ({
    click: () => {
      message.success({ content: "clicked~" });
    },
  }));

  return (
    <Button type="primary" size="large">
      Click Test
    </Button>
  );
};

TestRefSub = React.forwardRef(TestRefSub);

// - [javascript - Call child method from parent - Stack Overflow](https://stackoverflow.com/questions/37949981/call-child-method-from-parent)
export const TestRefMain = () => {
  const ref = useRef();
  return (
    <div id={"test"} className="flex justify-center items-center h-screen">
      <TestRefSub ref={ref} />
      <Button
        type="primary"
        danger
        size={"large"}
        className={"ml-4"}
        // @ts-ignore
        onClick={() => ref.current.click()}
      >
        Click Test 3
      </Button>
    </div>
  );
};

export default TestRefMain;
