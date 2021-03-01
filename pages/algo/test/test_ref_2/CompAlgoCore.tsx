import AlgoLayoutBase from "../../../../components/layout/AlgoLayout/AlgoLayoutBase";
import { Button, Card, message } from "antd";
import { CompBreadcrumb } from "../../../../components/layout/AlgoLayout/AlgoLayoutDisplay";
import AlgoLayoutCtrl from "../../../../components/layout/AlgoLayout/AlgoLayoutCtrl";
import AlgoLayoutCase from "../../../../components/layout/AlgoLayout/AlgoLayoutCase";
import React, { useRef, useState } from "react";
import { AlgoLog } from "../../../../functions/algoLog";

export interface ICompAlgoCorePops {
  defaultCase: string;
  nav: Array<string>;
  children: any;
}

export const CompAlgoCore = (props: ICompAlgoCorePops) => {
  const ref = useRef();
  const [inputCase, setInputCase] = useState(props.defaultCase);
  const [curCase, setCurCase] = useState(inputCase);
  const [steps, setSteps] = useState(0);
  const refLog = useRef(
    new AlgoLog(`程序<${props.nav[props.nav.length - 1]}>已启动`)
  );
  const [isFinished, setIsFinished] = useState(false);

  const init = () => {
    console.log("init in core");
  };
  const next = () => {
    console.log("next in core");
    return true;
  };

  return (
    <AlgoLayoutBase>
      <Card
        title={<CompBreadcrumb nav={props.nav} />}
        style={{ height: 450 }}
        bodyStyle={{ height: 400 }}
        extra={
          <div className="inline-flex">
            <Button type={"primary"} className="mr-2">
              介绍
            </Button>

            <Button type={"primary"} danger className="mr-2">
              图示
            </Button>
          </div>
        }
      >
        {React.Children.map(props.children, (child) =>
          React.cloneElement(child, {
            curCase: curCase,
            setCurCase: setCurCase,
            log: refLog.current,
          })
        )}
      </Card>

      <AlgoLayoutCtrl
        content={refLog.current.output()}
        next={() => {
          if (isFinished) {
            message.error({ content: "算法已经完成，请重新运行~" });
            return;
          }
          if (!next()) {
            setIsFinished(true);
          }
          setSteps(steps + 1);
        }}
        stop={isFinished}
        reRun={() => {
          init();
          setCurCase(inputCase);
          setIsFinished(false);
          setSteps(0);
        }}
        extraControls={[]}
      />

      <AlgoLayoutCase
        Case={inputCase}
        modifyCase={setInputCase}
        updateCase={(e) => {
          setCurCase(e);
        }}
        resetCase={() => {
          setInputCase(props.defaultCase);
          setCurCase(props.defaultCase);
        }}
      />
    </AlgoLayoutBase>
  );
};

export default CompAlgoCore;
