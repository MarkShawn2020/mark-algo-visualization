import React, { useImperativeHandle, useRef, useState } from "react";
import { Button, message } from "antd";
import { IAlgoLog } from "../../../../interface/AlgoVisualization";

export interface ICompAlgoBubbleSortPops {
  children: any;
  curCase: string;
  setCurCase: any;
  log: IAlgoLog;
}

export const CompAlgoBubbleSortModule = React.forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    init: () => {
      console.log("init~~");
    },
    next: () => {
      console.log("next~~");
    },
    stop: () => {
      console.log("stop~~");
    },
  }));

  console.log({ props, ref });

  return <div id={"algo-main"}>{props.children}</div>;
});
