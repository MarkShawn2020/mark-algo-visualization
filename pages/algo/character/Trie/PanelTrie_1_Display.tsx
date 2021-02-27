import { Breadcrumb, Button, Card } from "antd";
import EChartsReact from "echarts-for-react";

const CompBreadcrumb = () => (
  <div>
    <Breadcrumb>
      <Breadcrumb.Item>算法可视化</Breadcrumb.Item>
      <Breadcrumb.Item>字符串</Breadcrumb.Item>
      <Breadcrumb.Item>构造字典树</Breadcrumb.Item>
    </Breadcrumb>
  </div>
);

export const PanelTrie_1_Display = ({ refEchart, echartOption }) => {
  return (
    <Card
      title={<CompBreadcrumb />}
      style={{ height: 450 }}
      bodyStyle={{ maxHeight: 400 }}
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
      <EChartsReact
        ref={refEchart}
        option={echartOption}
        notMerge={true}
        style={{ height: 400, width: 600 }}
        opts={{ renderer: "svg" }}
      />
    </Card>
  );
};

export default PanelTrie_1_Display;
