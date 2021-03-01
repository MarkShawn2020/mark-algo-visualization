import React from "react";
import AlgoLayoutCore from "../../../../components/layout/AlgoLayout/AlgoLayoutCore";

const nav = ["算法可视化", "经典排序", "冒泡排序"];
const defaultCase = "acb";

export const AlgoBubbleSortRef = React.forwardRef((props, ref) => {
  return (
    <div className="w-full h-full flex flex-col justify-around items-center">
      {/*@ts-ignore*/}
      {props.curCase.split("").map((item, index) => (
        <button className="w-16 bg-gray-500 text-white text-2xl" key={index}>
          {item}
        </button>
      ))}
    </div>
  );
});

export const AlgoBubbleSort = () => {
  return (
    <AlgoLayoutCore defaultCase={defaultCase} info={{ nav }}>
      <AlgoBubbleSortRef />
    </AlgoLayoutCore>
  );
};

export default AlgoBubbleSort;
