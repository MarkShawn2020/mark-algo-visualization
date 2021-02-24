import { Layout, Menu, Breadcrumb } from "antd";
import MarkIcon from "../components/icons/antdIcons";
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
import {
  AppendixItem_I,
  Appendix,
} from "../components/AlgoVisualization/appendix";
import CompAlgoVisualization from "../components/AlgoVisualization/LayoutAlgoVisualization";

const AppendixItemRender = (item: AppendixItem_I) =>
  item.children ? (
    <SubMenu
      key={item.title_cn}
      title={item.title_cn}
      icon={<MarkIcon type={item.icon || "icon-this1"} />}
    >
      {item.children.map((subItem) => AppendixItemRender(subItem))}
    </SubMenu>
  ) : (
    <Menu.Item key={item.title_cn}>{item.title_cn}</Menu.Item>
  );

const MarkLayout = () => (
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
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%", borderRight: 0 }}
        >
          {Appendix.map((item) => AppendixItemRender(item))}
        </Menu>
      </Sider>

      <Layout>
        {/*<Breadcrumb style={{margin: '16px 0'}}>*/}
        {/*    <Breadcrumb.Item>Home</Breadcrumb.Item>*/}
        {/*    <Breadcrumb.Item>List</Breadcrumb.Item>*/}
        {/*    <Breadcrumb.Item>App</Breadcrumb.Item>*/}
        {/*</Breadcrumb>*/}

        <Content className="site-layout-background min-h-screen text-red-500">
          <CompAlgoVisualization />
        </Content>
      </Layout>
    </Layout>
  </Layout>
);

export default MarkLayout;
