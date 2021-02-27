import { Menu } from "antd";

export const LayoutHeader = () => {
  return (
    <div className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">Visualization</Menu.Item>
        <Menu.Item key="2">InteractiveGames</Menu.Item>
        <Menu.Item key="3">ProblemSets</Menu.Item>
        <Menu.Item key="3">Documentations</Menu.Item>
      </Menu>
    </div>
  );
};

export default LayoutHeader;
