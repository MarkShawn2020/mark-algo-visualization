import AlgoLayoutBase from "../../../../components/layout/AlgoLayout/AlgoLayoutBase";
import { Button, Card } from "antd";
import { CompBreadcrumb } from "../../../../components/layout/AlgoLayout/AlgoLayoutDisplay";
import AlgoLayoutCtrl from "../../../../components/layout/AlgoLayout/AlgoLayoutCtrl";
import AlgoLayoutCase from "../../../../components/layout/AlgoLayout/AlgoLayoutCase";
import React, { useRef, useState } from "react";
import { AlgoLog } from "../../../../functions/algoLog";
import { CompAlgoBubbleSort } from "./CompAlgoBubbleSort";

const nav = ["算法可视化", "经典排序", "冒泡排序算法"];
const defaultCase = "bca";
const log = new AlgoLog(`程序<${nav[nav.length - 1]}>已启动`);

export const AlgoBubbleSort = () => {
  const ref = useRef();
  const [inputCase, setInputCase] = useState(defaultCase);
  const [curCase, setCurCase] = useState(inputCase);
  const [isFinished, setFinished] = useState(false);
  const [steps, setSteps] = useState(0);

  return (
    <AlgoLayoutBase>
      <Card
        title={<CompBreadcrumb nav={nav} />}
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
        <CompAlgoBubbleSort
          ref={ref}
          curCase={curCase}
          setCurCase={setCurCase}
          log={log}
        />
      </Card>

      <AlgoLayoutCtrl
        content={log.output()}
        next={() => {
          // @ts-ignore
          ref.current.next();
          // @ts-ignore
          if (ref.current && ref.current.stop()) {
            setFinished(true);
          }
          setSteps(steps + 1);
        }}
        stop={isFinished}
        reRun={() => {
          // @ts-ignore
          ref.current.init();
          setCurCase(inputCase);
          setFinished(false);
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
          setInputCase(defaultCase);
          setCurCase(defaultCase);
        }}
      />
    </AlgoLayoutBase>
  );
};

export default AlgoBubbleSort;
