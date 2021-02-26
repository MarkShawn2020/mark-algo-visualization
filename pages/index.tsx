import { GetStaticProps } from "next";
import { readFileSync } from "fs";
import { join } from "path";
import { Layout } from "antd";
import { useState } from "react";
import * as Resizer from "../components/LC_ResizableBar";
import PanelTrie from "../components/AlgoVisualization/character/trie/PanelTrie";
import CompSplitBar from "../components/common/CompSplitBar";
import { PanelCase } from "../components/AlgoVisualization/Panels/PanelCase";
import PanelCode from "../components/AlgoVisualization/Panels/PanleCode";
import LayoutFooter from "../components/AlgoVisualization/layout/LayoutFooter";
import LayoutHeader from "../components/AlgoVisualization/layout/LayoutHeader";
import LayoutSider from "../components/AlgoVisualization/layout/LayoutSider";
const { Header, Content, Sider, Footer } = Layout;

const MarkLayout = ({ CodeInput, CaseInput }) => {
  const modifyCase = (e) => setCase(e);
  const resetCase = () => setCase(CaseInput);
  const [Case, setCase] = useState(CaseInput);
  console.log({ CaseInMain: Case });

  return (
    <Layout>
      <Header>
        <LayoutHeader />
      </Header>

      <Layout>
        <Sider width={200} className="site-layout-background">
          <LayoutSider />
        </Sider>

        <Content className="site-layout-background text-red-500">
          <section>
            <Resizer.Container>
              {/* display and control */}
              <Resizer.Section minSize={600}>
                <PanelTrie Case={Case} />
              </Resizer.Section>

              <CompSplitBar />

              {/* case and code */}
              <Resizer.Section>
                <PanelCase
                  Case={Case}
                  modifyCase={modifyCase}
                  resetCase={resetCase}
                />
                <PanelCode Code={CodeInput} />
              </Resizer.Section>
            </Resizer.Container>
          </section>
        </Content>
      </Layout>

      <Footer>
        <LayoutFooter />
      </Footer>
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
