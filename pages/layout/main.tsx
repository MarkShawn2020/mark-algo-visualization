import { Layout, Menu, Breadcrumb } from 'antd';
import {UserOutlined, LaptopOutlined, NotificationOutlined, FileSearchOutlined} from '@ant-design/icons';
import Link from "next/link"
import MarkIcon from "../../support/icons/antdIcons";
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;



const MarkLayout = () => (
    <Layout className="min-h-screen">
        <Header className="header">
            <div className="logo"/>
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
                    style={{height: '100%', borderRight: 0}}
                >


                    <SubMenu key={"基础算法"} title={"基础算法"} icon={<MarkIcon type={"icon-Icons_Basic_Opti"}/>}>
                        <Menu.Item key={"贪心法"}>贪心法</Menu.Item>
                        <Menu.Item key={"分治法"}>分治法</Menu.Item>
                        <Menu.Item key={"减治法"}>减治法</Menu.Item>
                    </SubMenu>

                    <SubMenu key={"search-algo"} title={"搜索技术"} icon={<FileSearchOutlined />}>
                        <Menu.Item key={"BFS"}> BFS </Menu.Item>
                        <Menu.Item key={"DFS"}> DFS </Menu.Item>
                    </SubMenu>

                    <SubMenu key="图论" icon={<MarkIcon type={"icon-tuluntuilisuanfa"}/>} title="图论">
                        <SubMenu key={"最短路径"} title={"最短路径"}>
                            <Menu.Item key={"Dijkstra"}>
                                <Link href={"algo/visualization/graph/ShortestPath/Dijkstra"}>
                                    <a>Dijkstra</a>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key={"SPFA"}>SPFA</Menu.Item>
                            <Menu.Item key={"Floyd"}>Floyd</Menu.Item>
                            <Menu.Item key={"Bellman-Ford"}>Bellman-Ford</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="2">Tarjan</Menu.Item>
                        <Menu.Item key="3">option3</Menu.Item>
                        <Menu.Item key="4">option4</Menu.Item>
                    </SubMenu>

                    <SubMenu key="树算法" icon={<MarkIcon type={"icon-shu"}/>} title="树">
                        <Menu.Item key="5">二叉树</Menu.Item>
                        <Menu.Item key="6">线段树</Menu.Item>
                        <Menu.Item key="7">树状数组</Menu.Item>
                    </SubMenu>

                <SubMenu key={"并查集"} title={"并查集"} icon={<MarkIcon type={"icon-hebingchakan"}/>}/>

                <SubMenu key="动态规划" icon={<MarkIcon type={"icon-zu2"}/>} title="动态规划">
                        <Menu.Item key="9">基础DP</Menu.Item>
                        <Menu.Item key="10">递推与记忆化搜索</Menu.Item>
                        <Menu.Item key="11">区间DP</Menu.Item>
                        <Menu.Item key="12">树形DP</Menu.Item>
                        <Menu.Item key="12">数位DP</Menu.Item>
                        <Menu.Item key="12">状态压缩DP</Menu.Item>
                        <Menu.Item key="12">环上DP</Menu.Item>
                </SubMenu>

                    <SubMenu key={"character"} title={"字符串"} icon={<MarkIcon type={"icon-zifuchuan"}/>}>
                        <Menu.Item key={"character-hash"}>字符串哈希</Menu.Item>
                        <Menu.Item key={"character-dict-tree"}>字典树</Menu.Item>
                        <Menu.Item key={"KMP"}>KMP算法</Menu.Item>
                        <Menu.Item key={"AC自动机"}>AC自动机</Menu.Item>
                        <Menu.Item key={"character-suffix"}>后缀树与后缀数组</Menu.Item>
                    </SubMenu>

                    <SubMenu key={"math"} title={"数学"} icon={<MarkIcon type={"icon-shuxue-cuotiben1"}/>}>
                        <Menu.Item key={"高精度计算"}>高精度计算</Menu.Item>
                        <Menu.Item key={"快速幂"}>快速幂</Menu.Item>
                        <Menu.Item key={"GCD"}>GCD、LCM</Menu.Item>
                        <Menu.Item key={"扩欧"}>扩展欧几里得算法</Menu.Item>
                        <Menu.Item key={"同余与逆元"}>同余与逆元</Menu.Item>
                        <Menu.Item key={"素数"}>素数</Menu.Item>
                    </SubMenu>
                    
                    <SubMenu key={"计算几何"} title={"计算几何"} icon={<MarkIcon type={"icon-jihe"}/>}>
                        <Menu.Item key={"凸包"}>凸包</Menu.Item>
                        <Menu.Item key={"三维凸包"}>三维凸包</Menu.Item>
                        <Menu.Item key={"几何模板"}>几何模板</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
            <Layout style={{padding: '0 24px 24px'}}>
                <Breadcrumb style={{margin: '16px 0'}}>
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
                    算法可视化
                </Content>
            </Layout>
        </Layout>
    </Layout>
);

export default MarkLayout;
