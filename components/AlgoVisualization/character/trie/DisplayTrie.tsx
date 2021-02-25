import * as echarts from "echarts/core";
import { TooltipComponent } from "echarts/components";
import { TreeChart, TreeSeriesOption } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import EChartsReact, { EChartsInstance } from "echarts-for-react";

echarts.use([TooltipComponent, TreeChart, CanvasRenderer]);

import { TrieNodeItemOption } from "./G6_sample_data";
import { EChartOption } from "echarts";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "antd";

interface TrieSeries extends Omit<TreeSeriesOption, "data"> {
  data: TrieNodeItemOption[];
}

interface TrieOption extends Omit<EChartOption, "series"> {
  series: TrieSeries[];
}

interface DisplayTrieProps {
  Case: string;
}

export const deepCopy = (obj: object) => {
  return JSON.parse(JSON.stringify(obj));
};

const getDepth = (tree: TrieNodeItemOption) => {
  let que: TrieNodeItemOption[] = [];
  let i = 0,
    j = 0,
    h = 0;
  for (let i = 0; i < tree.children.length; ++i) {
    que.push(tree.children[i]);
    ++j;
  }
  while (i < j) {
    ++h;
    const node = que[i++];
    for (let i = 0; i < node.children.length; ++i) {
      que.push(node.children[i]);
      ++j;
    }
  }
  return h;
};

export const DisplayTrie = ({ Case }: DisplayTrieProps) => {
  const seqs = Case.split("\n").slice(1, -1); // 字符串数组

  const [step, setStep] = useState(1); // 总共第几个字符（字符id）
  const seq_i = useRef(0); // 第几个字符串
  const seq_j = useRef(0); // 字符串内第几个字符
  const isOver = useRef<boolean>(false);
  const root: TrieNodeItemOption = {
    id: 0,
    name: "root",
    value: "",
    itemStyle: {
      borderColor: "#fff",
    },
    children: [],
  };
  const refRoot = useRef<TrieNodeItemOption>(root);
  const refNode = useRef<TrieNodeItemOption>(root);
  const refEchart = useRef<EChartsReact>(null);
  const refOption = useRef<TrieOption>({
    tooltip: {
      trigger: "item",
      triggerOn: "mousemove",
    },

    series: [
      {
        type: "tree",
        data: [],

        left: "2%",
        right: "2%",
        top: "4%",
        bottom: "20%",

        symbol: "circle",
        symbolSize: 40,
        orient: "vertical",
        expandAndCollapse: false, // 是否自动收起结点：否。否则不利于动画演示

        label: {
          position: "inside",
          rotate: 0,
          verticalAlign: "middle",
          align: "center",
          fontSize: 20,
        },

        tooltip: {
          formatter: ({ data }) =>
            ["id: " + data.id, "value: " + data.value].join("</br>"),
        },

        animationDurationUpdate: 750,
      },
    ],
  });

  const addUnit = (step: number) => {
    refNode.current.itemStyle.shadowBlur = 0;
    if (seq_j.current === 0) refNode.current = refRoot.current;
    let node: TrieNodeItemOption = refNode.current;
    let seq = seqs[seq_i.current];
    let ch = seq[seq_j.current];

    // update child
    let child_i = node.children.findIndex((item) => item.name === ch);
    let child: TrieNodeItemOption;
    if (child_i >= 0) {
      child = node.children[child_i];
    } else {
      child = {
        id: step,
        name: ch,
        value: node.value + ch,
        itemStyle: {
          borderColor: "#fff",
          color: seq_j.current === seq.length - 1 ? "#c33" : "#ccc",
        },
        children: [],
      };
      node.children.push(child);
    }
    child.itemStyle.shadowBlur = 20;
    child.itemStyle.shadowColor = "#0a0";

    // update refs
    if (++seq_j.current === seq.length) {
      seq_j.current = 0;
      ++seq_i.current;
      if (seq_i.current === seqs.length) {
        isOver.current = true;
      }
    }
    refNode.current = child;
  };

  const addChar = () => {
    if (isOver.current) {
      console.log("over!");
      return;
    }
    addUnit(step);
    setStep(step + 1);
  };

  const addStr = () => {
    if (isOver.current) {
      console.log("over!");
      return;
    }
    let Step = step;
    do {
      addUnit(Step);
      ++Step;
    } while (seq_j.current !== 0);
    setStep(Step);
  };

  useEffect(() => {
    refOption.current.series[0].data = [refRoot.current];
    // - [echarts-for-react中数据发生变化，如何让图表实时更新。 - SegmentFault 思否](https://segmentfault.com/q/1010000017302705/a-1020000017857113)
    refEchart.current.getEchartsInstance().setOption(refOption.current);
  }, [step]);

  return (
    <div>
      <EChartsReact
        option={refOption.current}
        ref={refEchart}
        style={{ height: 600, width: 600 }}
      />
      <div className="inline-flex">
        <Button type={"primary"} className="mr-2" onClick={addChar}>
          Next Char
        </Button>

        <Button type={"primary"} className="mr-2" onClick={addStr}>
          Next Str
        </Button>
      </div>
    </div>
  );
};

export default DisplayTrie;
