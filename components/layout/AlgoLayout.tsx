import { Layout } from "antd";
import LayoutFooter from "../layout/LayoutFooter";
import LayoutHeader from "../layout/LayoutHeader";
import LayoutSider from "../layout/LayoutSider";
const { Header, Content, Sider, Footer } = Layout;

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

        <Content className="site-layout-background">{children}</Content>
      </Layout>

      <Footer className="flex justify-center">
        <LayoutFooter />
      </Footer>
    </Layout>
  );
};

export default AlgoLayout;
