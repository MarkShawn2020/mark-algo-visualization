import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const MarkLayout = () => (
    <Layout className="min-h-screen">
        <Header className="header">
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">算法可视化</Menu.Item>
                <Menu.Item key="2">算法游戏</Menu.Item>
                <Menu.Item key="3">算法笔记</Menu.Item>
            </Menu>
        </Header>
        <Layout>
            <Sider width={200} className="site-layout-background">
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                >
                    <SubMenu key="sub1" icon={<UserOutlined />} title="图论">
                        <SubMenu key={"最短路径"} title={"最短路径"}>
                            <Menu.Item key={"Dijkstra"}>Dijkstra</Menu.Item>
                            <Menu.Item key={"SPFA"}>SPFA</Menu.Item>
                            <Menu.Item key={"Floyd"}>Floyd</Menu.Item>
                            <Menu.Item key={"Bellman-Ford"}>Bellman-Ford</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="2">Tarjan</Menu.Item>
                        <Menu.Item key="3">option3</Menu.Item>
                        <Menu.Item key="4">option4</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<LaptopOutlined />} title="树">
                        <Menu.Item key="5">option5</Menu.Item>
                        <Menu.Item key="6">option6</Menu.Item>
                        <Menu.Item key="7">option7</Menu.Item>
                        <Menu.Item key="8">option8</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" icon={<NotificationOutlined />} title="动态规划">
                        <Menu.Item key="9">option9</Menu.Item>
                        <Menu.Item key="10">option10</Menu.Item>
                        <Menu.Item key="11">option11</Menu.Item>
                        <Menu.Item key="12">option12</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Content
                    className="site-layout-background min-h-screen text-red-500"
                    style={{
                        padding: 24,
                        margin: 0,
                    }}
                >
                    Content
                </Content>
            </Layout>
        </Layout>
    </Layout>
);

export default MarkLayout;
