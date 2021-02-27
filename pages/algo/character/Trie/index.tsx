import { message } from "antd";
import EChartsReact from "echarts-for-react";
import { useEffect, useRef, useState } from "react";
import { TrieNodeItemOption, TrieOption } from "./Trie";
import { deepCopy } from "../../../../functions/common";
import { defaultOption, defaultRoot } from "./const";
import { GetStaticProps } from "next";
import { readFileSync } from "fs";
import { join } from "path";
import AlgoLayoutCase from "../../../../components/layout/AlgoLayoutCase";
import AlgoLayoutControl from "../../../../components/layout/AlgoLayoutControl";
import AlgoLayoutDisplay from "../../../../components/layout/AlgoLayoutDisplay";
import AlgoLayout from "../../../../components/layout/AlgoLayout";

export const VisualAlgoTrie = ({ CaseInput, CodeInput }) => {
  const modifyCase = (e) => setCase(e);
  const resetCase = () => setCase(CaseInput);
  const [Case, setCase] = useState(CaseInput);
  console.log({ CaseInMain: Case });
  const refLogs = useRef<Array<string>>([]);
  const [step, setStep] = useState(0); // 总共第几个字符（字符id）
  const refSeqs = useRef<Array<string>>(null); // 字符串数组
  const refSeq_i = useRef(0); // 第几个字符串
  const refSeq_j = useRef(0); // 字符串内第几个字符
  const refRoot = useRef<TrieNodeItemOption>(null);
  const refNode = useRef<TrieNodeItemOption>(null);
  const refOption = useRef<TrieOption>(deepCopy(defaultOption));
  const refEchart = useRef<EChartsReact>(null);

  const isFinished = (): boolean => {
    let f = refSeq_i.current === refSeqs.current.length;
    if (f) message.warn("已经结束啦~").then();
    return f;
  };

  const initOption = () => {
    refLogs.current.splice(0);
    refLogs.current.push("程序「构造字典树」已启动");
    let option = deepCopy(defaultOption);
    let r = (refRoot.current = refNode.current = deepCopy(defaultRoot));
    option.series[0].data = [r];
    refOption.current = option;
    refSeqs.current = Case.split("\n").filter((i) => i.length > 0);
    refSeq_i.current = refSeq_j.current = 0;

    let rc = refEchart.current.getEchartsInstance();
    rc.clear(); // very very important !
    rc.setOption(refOption.current, true);
    setStep(1);
  };

  const updateOption = () => {
    refEchart.current.getEchartsInstance().setOption(refOption.current, false);
  };

  useEffect(() => {
    initOption();
  }, [Case]);

  useEffect(() => {
    updateOption();
  }, [step]); // 内部按钮操作触发

  const addUnit = (step: number) => {
    refNode.current.itemStyle.shadowBlur = 0;
    if (refSeq_j.current === 0) refNode.current = refRoot.current;
    let node: TrieNodeItemOption = refNode.current;
    let seq = refSeqs.current[refSeq_i.current];
    let ch = seq[refSeq_j.current];
    refLogs.current.push(
      `单步更新 - step: ${step}, i: ${refSeq_i.current}, str: "${seq}" j: ${refSeq_j.current}, char: "${ch}"`
    );

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
          color: refSeq_j.current === seq.length - 1 ? "#c33" : "#ccc",
        },
        children: [],
        tooltip: {
          formatter: "{c}",
        },
      };
      node.children.push(child);
    }
    child.itemStyle.shadowBlur = 20;
    child.itemStyle.shadowColor = "#0a0";

    // update refs
    if (++refSeq_j.current === seq.length) {
      refSeq_j.current = 0;
      ++refSeq_i.current;
    }
    refNode.current = child;
  };

  const addChar = () => {
    if (isFinished()) return;
    addUnit(step);
    setStep(step + 1);
  };

  const addStr = () => {
    if (isFinished()) return;
    let Step = step;
    do {
      addUnit(Step);
      ++Step;
    } while (refSeq_j.current !== 0);
    setStep(Step);
  };

  return (
    <AlgoLayout>
      <div>
        <AlgoLayoutDisplay paths={["算法可视化", "字符串", "字典树的构造"]}>
          <EChartsReact
            ref={refEchart}
            option={refOption.current}
            notMerge={true}
            style={{ height: 400, width: 600 }}
            opts={{ renderer: "svg" }}
          />
        </AlgoLayoutDisplay>

        <AlgoLayoutCase
          Case={Case}
          modifyCase={modifyCase}
          resetCase={resetCase}
        />

        <AlgoLayoutControl
          content={refLogs.current}
          reRun={initOption}
          extraControls={[
            {
              value: "下一个字符",
              method: addChar,
            },
            {
              value: "下一个字符串",
              method: addStr,
            },
          ]}
        />
      </div>
    </AlgoLayout>
  );
};

export default VisualAlgoTrie;

const CodePath = "pages/algo/character/trie/code.cpp";
const CasePath = "pages/algo/character/trie/case1.txt";

export const getStaticProps: GetStaticProps = async (context) => {
  const CaseInput = await readFileSync(join(process.cwd(), CasePath), "utf-8");
  const CodeInput = await readFileSync(join(process.cwd(), CodePath), "utf-8");
  console.log({ CaseInput });
  return {
    props: {
      CaseInput,
      CodeInput,
    },
  };
};
