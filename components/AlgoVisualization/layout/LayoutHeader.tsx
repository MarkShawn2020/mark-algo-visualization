import { Menu } from "antd";

export const LayoutHeader = () => {
  return (
    <div className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">算法可视化</Menu.Item>
        <Menu.Item key="2">算法游戏</Menu.Item>
        <Menu.Item key="3">算法笔记</Menu.Item>
      </Menu>
    </div>
  );
};

export default LayoutHeader;
