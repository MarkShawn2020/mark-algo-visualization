import { Button } from "antd";
import React, { useImperativeHandle } from "react";
import AlgoLayoutCore, {
  AlgoProps,
} from "../../../../components/layout/AlgoLayout/AlgoLayoutCore";

const nav = ["算法可视化", "经典排序", "冒泡排序"];
const defaultCase = "acb";

export const AlgoBubbleSortRef = React.forwardRef(
  ({ curCase, setCurCase, log }: AlgoProps, ref) => {
    useImperativeHandle(ref, () => ({
      init: () => console.log("init"),
      next: () => console.log("next"),
      stop: () => false,
    }));

    return (
      <div className="w-full h-full flex flex-col justify-around items-center">
        {curCase.split("").map((item, index) => (
          <Button type={"primary"} size={"large"} key={index}>
            {item}
          </Button>
        ))}
      </div>
    );
  }
);

export const AlgoBubbleSort = () => (
  <AlgoLayoutCore info={{ nav: nav }} defaultCase={defaultCase}>
    <AlgoBubbleSortRef />
  </AlgoLayoutCore>
);

export default AlgoBubbleSort;
