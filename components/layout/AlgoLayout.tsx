import { Layout } from "antd";
import LayoutFooter from "../layout/LayoutFooter";
import LayoutHeader from "../layout/LayoutHeader";
import LayoutSider from "../layout/LayoutSider";
import * as Resizer from "../LC_ResizableBar";
import CompSplitBar from "../common/CompSplitBar";
import AlgoLayoutNote from "./AlgoLayoutNote";
const { Header, Sider, Footer, Content } = Layout;

const AlgoLayout = ({ children }) => {
  return (
    <Layout>
      <Header>
        <LayoutHeader />
      </Header>

      <Layout>
        <Sider width={200} className="site-layout-background">
          <LayoutSider />
        </Sider>

        <Content>
          <Resizer.Container>
            {/* display and control */}
            <Resizer.Section minSize={600}>{children}</Resizer.Section>

            <CompSplitBar />

            {/* case and code */}
            <Resizer.Section>
              <AlgoLayoutNote />
            </Resizer.Section>
          </Resizer.Container>
        </Content>
      </Layout>

      <Footer className="flex justify-center">
        <LayoutFooter />
      </Footer>
    </Layout>
  );
};

export default AlgoLayout;
