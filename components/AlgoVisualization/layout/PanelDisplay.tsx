import { Breadcrumb, Card } from "antd";
import dynamic from "next/dynamic";

const DisplayTrieDynamic = dynamic(import("../character/trie/DisplayTrie"), {
  ssr: false,
});

const CompBreadcrumb = () => (
  <div>
    <Breadcrumb>
      <Breadcrumb.Item>算法可视化</Breadcrumb.Item>
      <Breadcrumb.Item>字符串</Breadcrumb.Item>
      <Breadcrumb.Item>字典树</Breadcrumb.Item>
    </Breadcrumb>
  </div>
);

const PanelDisplay = ({ Case }) => {
  return (
    <Card title={<CompBreadcrumb />}>
      <DisplayTrieDynamic Case={Case} />
    </Card>
  );
};

export default PanelDisplay;
