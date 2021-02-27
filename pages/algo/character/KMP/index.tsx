import AlgoLayoutTrie from "../../../../components/layout/AlgoLayoutTrie";
import AlgoLayoutDisplay from "../../../../components/layout/AlgoLayoutDisplay";
import AlgoLayoutCase from "../../../../components/layout/AlgoLayoutCase";
import AlgoLayoutControl from "../../../../components/layout/AlgoLayoutControl";

export const VisualAlgoKMP = () => {
  return (
    <AlgoLayoutTrie>
      <AlgoLayoutDisplay paths={["算法可视化", "字符串", "KMP算法"]}>
        <section>hello</section>
      </AlgoLayoutDisplay>

      <AlgoLayoutCase Case={"xxx"} modifyCase={{}} resetCase={{}} />

      <AlgoLayoutControl
        content={[]}
        reRun={() => {}}
        extraControls={[{ value: "下一步", method: () => {} }]}
      />
    </AlgoLayoutTrie>
  );
};

export default VisualAlgoKMP;
