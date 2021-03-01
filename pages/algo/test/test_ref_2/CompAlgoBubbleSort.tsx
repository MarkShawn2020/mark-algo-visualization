import React, { useImperativeHandle, useRef, useState } from "react";
import { Button, message } from "antd";
import { AlgoLog } from "../../../../functions/algoLog";

export interface ICompAlgoBubbleSortPops {
  curCase: string;
  setCurCase: any;
  log: AlgoLog;
  children?: any;
}

export const CompAlgoBubbleSort = React.forwardRef(
  (props: ICompAlgoBubbleSortPops, ref) => {
    useImperativeHandle(ref, () => ({
      init,
      next,
      stop,
    }));

    console.log({ props, ref });
    const { curCase, setCurCase, log } = props;

    const refFinished = useRef(false);
    const [curPos, setCurPos] = useState(-1);
    const refChanged = useRef(0);
    const refAllChanged = useRef(0);
    const refPeriod = useRef(1);

    const h_ele = 40;
    const h_dis = (400 - h_ele * curCase.length) / (curCase.length + 1);
    const h_comp = 2 * (h_ele + h_dis);

    const init = () => {
      console.log("init");
      refChanged.current = refAllChanged.current = 0;
      refPeriod.current = 1;
      log.clear();
      setCurCase(curCase);
      setCurPos(-1);
      // setCurCase(inputCase);
      refFinished.current = false;
    };

    const stop = () => refFinished.current;

    const next = () => {
      console.log("next stepping");
      if (curPos == curCase.length - 2) {
        log.info(
          `第${refPeriod.current}轮冒泡完成，共交换了${refChanged.current}个字符`
        );
        if (refChanged.current > 0) {
          ++refPeriod.current;
        } else {
          log.info(
            `至此，所有交换已完成，共遍历轮数： ${refPeriod.current}，总计交换次数：${refAllChanged.current}`
          );
          refFinished.current = true;
          message.success({ content: "排序已完成~" });
        }
        refChanged.current = 0;
        setCurPos(-1);
      } else {
        log.info(
          `comparing s[${curPos + 1}]=${curCase[curPos + 1]} and s[${
            curPos + 2
          }]=${curCase[curPos + 2]}`
        );
        if (curCase[curPos + 1] > curCase[curPos + 2]) {
          let tChars = curCase.split("");
          [tChars[curPos + 1], tChars[curPos + 2]] = [
            tChars[curPos + 2],
            tChars[curPos + 1],
          ];
          setCurCase(tChars.join(""));
          log.info(
            `本轮交换${++refChanged.current}一次，因为s[${curPos + 1}]<s[${
              curPos + 2
            }]`
          );
          ++refAllChanged.current;
        }
        setCurPos(curPos + 1);
      }
    };

    return (
      <div className="flex flex-col-reverse justify-around w-full h-full items-center relative">
        <div
          className="absolute bg-gray-500 bg-opacity-50"
          style={{
            width: 60,
            height: h_comp,
            bottom: 5 + (h_ele + h_dis) * curPos,
          }}
        />

        {curCase.split("").map((item, index) => {
          return (
            <Button
              type={"primary"}
              key={index}
              size={"large"}
              shape={"circle"}
              className="flex items-center justify-center bg-green-700"
            >
              <div className="text-4xl">{item}</div>
            </Button>
          );
        })}
      </div>
    );
  }
);
