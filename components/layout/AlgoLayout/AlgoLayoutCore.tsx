import AlgoLayoutBase from "./AlgoLayoutBase";
import React, { useRef, useState } from "react";
import { AlgoInfoProps } from "../../../interface/AlgoVisualization";
import { AlgoLog } from "../../../functions/algoLog";
import { Button, Card, message } from "antd";
import { CompBreadcrumb } from "./AlgoLayoutDisplay";
import AlgoLayoutCtrl from "./AlgoLayoutCtrl";
import AlgoLayoutCase from "./AlgoLayoutCase";

export interface AlgoProps {
  curCase?: string;
  setCurCase?: React.SetStateAction<string>;
  log?: AlgoLog;
}

export interface AlgoLayoutCoreProps {
  children: any;
  defaultCase: string;
  info: AlgoInfoProps;
}

export const AlgoLayoutCore = ({
  children,
  defaultCase,
  info,
}: AlgoLayoutCoreProps) => {
  const [inputCase, setInputCase] = useState(defaultCase);
  const [curCase, setCurCase] = useState(inputCase);
  const [isFinished, setIsFinished] = useState(false);
  const name = info.name || info.nav[info.nav.length - 1];
  const refLog = useRef(new AlgoLog(`程序<${name}>已启动`));
  const ref = useRef(null);

  return (
    <AlgoLayoutBase>
      <Card
        title={<CompBreadcrumb nav={info.nav} />}
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
        {React.cloneElement(children, {
          curCase,
          setCurCase,
          log: refLog.current,
          ref: ref,
        })}
      </Card>

      <AlgoLayoutCtrl
        content={refLog.current.output()}
        next={() => {
          if (ref.current.stop()) {
            setIsFinished(true);
            message.error({ content: "算法已完成，请重新运行！" });
            return;
          }
          console.log("next step");
          ref.current.next();
        }}
        stop={isFinished}
        reRun={() => {
          ref.current.init();
          setIsFinished(false);
        }}
      />

      <AlgoLayoutCase
        Case={inputCase}
        modifyCase={setInputCase}
        updateCase={() => {
          ref.current.init();
          setCurCase(inputCase);
          setIsFinished(false);
        }}
        resetCase={() => {
          ref.current.init();
          setInputCase(defaultCase);
          setCurCase(defaultCase);
          setIsFinished(false);
          message.success({ content: "测试数据已重置~" });
        }}
      />
    </AlgoLayoutBase>
  );
};

export default AlgoLayoutCore;
