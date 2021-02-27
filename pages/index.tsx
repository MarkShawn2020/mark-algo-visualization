import { Layout } from "antd";
import LayoutFooter from "../components/layout/GlobalLayout/LayoutFooter";
import LayoutHeader from "../components/layout/GlobalLayout/LayoutHeader";
import LayoutSider from "../components/layout/GlobalLayout/LayoutSider";
const { Header, Content, Sider, Footer } = Layout;

const IndexPage = () => {
  return (
    <Layout>
      <Header>
        <LayoutHeader />
      </Header>

      <Layout>
        <Sider width={200} className="site-layout-background">
          <LayoutSider />
        </Sider>

        <Content className="site-layout-background text-red-500 flex justify-center items-center">
          {"Welcome to Home of Algo Visualization ! "}
        </Content>
      </Layout>

      <Footer className="flex justify-center">
        <LayoutFooter />
      </Footer>
    </Layout>
  );
};

export default IndexPage;
