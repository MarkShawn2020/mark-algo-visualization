import { GetStaticProps } from "next";
import * as Resizer from "../components/LC_ResizableBar";
import PanelAppendix from "../components/AlgoVisualization/layout/PanelAppendix";
import PanelDisplay from "../components/AlgoVisualization/layout/PanelDisplay";
import PanelConsole from "../components/AlgoVisualization/layout/PanleConsole";
import PanelCode from "../components/AlgoVisualization/layout/PanelCode";
import PanelCase from "../components/AlgoVisualization/layout/PanelCase";
import { readFileSync } from "fs";
import { join } from "path";

import { Layout, Menu } from "antd";
const { Header, Content, Sider } = Layout;

const MarkLayout = ({ Case, Code }) => (
  <Layout className="min-h-screen">
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
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
          <section>
            <Resizer.Container>
              <Resizer.Section minSize={600}>
                <PanelDisplay Case={Case} />
                <PanelConsole />
              </Resizer.Section>

              <Resizer.Bar
                size={10}
                className="bg-gray-200 flex justify-center items-center text-white  "
              >
                {"|||"}
              </Resizer.Bar>

              <Resizer.Section>
                <PanelCode Code={Code} />
                <PanelCase Case={Case} />
              </Resizer.Section>
            </Resizer.Container>
          </section>
        </Content>
      </Layout>
    </Layout>
  </Layout>
);

const CasePath = "components/AlgoVisualization/character/trie/case1.txt";
const CodePath = "components/AlgoVisualization/character/trie/code.cpp";

export const getStaticProps: GetStaticProps = async (context) => {
  const Case = await readFileSync(join(process.cwd(), CasePath), "utf-8");
  const Code = await readFileSync(join(process.cwd(), CodePath), "utf-8");
  console.log({ Code, Case });
  return {
    props: {
      Case: Case,
      Code: Code,
    },
  };
};
export default MarkLayout;
