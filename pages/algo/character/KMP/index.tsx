import AlgoLayoutDisplay from "../../../../components/layout/AlgoLayout/AlgoLayoutDisplay";
import AlgoLayoutCase from "../../../../components/layout/AlgoLayout/AlgoLayoutCase";
import AlgoLayoutCtrl from "../../../../components/layout/AlgoLayout/AlgoLayoutCtrl";
import { useState } from "react";
import { Button } from "antd";
import AlgoLayoutBase from "../../../../components/layout/AlgoLayout/AlgoLayoutBase";

const defaultTCase = "acdbastfds";

export const VisualAlgoKMP = () => {
  const [tCase, setTCase] = useState<string>(defaultTCase);
  return (
    <AlgoLayoutBase>
      {/*<AlgoLayoutDisplay paths={["算法可视化", "字符串", "KMP算法"]}>*/}
      {/*  <div className="inline-flex justify-around w-full h-full items-center">*/}
      {/*    {tCase.split("").map((item, index) => {*/}
      {/*      return (*/}
      {/*        <Button*/}
      {/*          type={"primary"}*/}
      {/*          key={index}*/}
      {/*          size={"large"}*/}
      {/*          shape={"circle"}*/}
      {/*          className="flex items-center justify-center bg-green-700"*/}
      {/*        >*/}
      {/*          <div className="text-4xl">{item}</div>*/}
      {/*        </Button>*/}
      {/*      );*/}
      {/*    })}*/}
      {/*  </div>*/}
      {/*</AlgoLayoutDisplay>*/}

      <AlgoLayoutCase
        Case={tCase}
        modifyCase={setTCase}
        resetCase={() => setTCase(defaultTCase)}
      />

      {/*<AlgoLayoutControl*/}
      {/*  content={[]}*/}
      {/*  reRun={() => {}}*/}
      {/*  extraControls={[{ value: "下一步", method: () => {} }]}*/}
      {/*/>*/}
    </AlgoLayoutBase>
  );
};

export default VisualAlgoKMP;
