import { GetStaticProps } from "next";
import PanelAppendix from "../components/AlgoVisualization/layout/PanelAppendix";
import { readFileSync } from "fs";
import { join } from "path";

import { Layout, Menu } from "antd";
import GridAlgoVisualization from "../components/AlgoVisualization/layout/GridAlgoVisualization";
const { Header, Content, Sider } = Layout;

const MarkLayout = ({ CodeInput, CaseInput }) => {
  return (
    <Layout className="min-h-screen">
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">算法可视化</Menu.Item>
          <Menu.Item key="2">算法游戏</Menu.Item>
          <Menu.Item key="3">算法笔记</Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <PanelAppendix />
        </Sider>

        <Layout>
          <Content className="site-layout-background min-h-screen text-red-500">
            <GridAlgoVisualization
              CaseInput={CaseInput}
              CodeInput={CodeInput}
            />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

const CasePath = "components/AlgoVisualization/character/trie/case1.txt";
const CodePath = "components/AlgoVisualization/character/trie/code.cpp";

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
export default MarkLayout;
