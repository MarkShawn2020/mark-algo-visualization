import AlgoLayoutDisplay from "../../../../components/layout/AlgoLayoutDisplay";
import AlgoLayoutCase from "../../../../components/layout/AlgoLayoutCase";
import AlgoLayoutControl from "../../../../components/layout/AlgoLayoutControl";
import AlgoLayout from "../../../../components/layout/AlgoLayout";

export const VisualAlgoKMP = () => {
  return (
    <AlgoLayout>
      <AlgoLayoutDisplay paths={["算法可视化", "字符串", "KMP算法"]}>
        <section>hello</section>
      </AlgoLayoutDisplay>

      <AlgoLayoutCase Case={"xxx"} modifyCase={{}} resetCase={{}} />

      <AlgoLayoutControl
        content={[]}
        reRun={() => {}}
        extraControls={[{ value: "下一步", method: () => {} }]}
      />
    </AlgoLayout>
  );
};

export default VisualAlgoKMP;
