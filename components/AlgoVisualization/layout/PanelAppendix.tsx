import { Appendix, AppendixItem_I } from "../appendix";
import MarkIcon from "../../icons/antdIcons";
import { Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";

const AppendixItem = (item: AppendixItem_I) =>
  item.children ? (
    <SubMenu
      key={item.title_cn}
      title={item.title_cn}
      icon={<MarkIcon type={item.icon || "icon-this1"} />}
    >
      {item.children.map((subItem) => AppendixItem(subItem))}
    </SubMenu>
  ) : (
    <Menu.Item key={item.title_cn}>{item.title_cn}</Menu.Item>
  );

const PanelAppendix = () => {
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      style={{ height: "100%", borderRight: 0 }}
    >
      {Appendix.map((item) => AppendixItem(item))}
    </Menu>
  );
};

export default PanelAppendix;
