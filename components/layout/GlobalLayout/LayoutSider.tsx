import { Appendix, AppendixItem_I } from "../../../interface/appendix";
import MarkIcon from "../../icons/antdIcons";
import { Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import Link from "next/link";

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
    <Menu.Item key={item.title_cn}>
      {item.path ? (
        <Link href={item.path}>{item.title_cn}</Link>
      ) : (
        item.title_cn
      )}
    </Menu.Item>
  );

const LayoutSider = () => {
  return (
    <div>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%", borderRight: 0 }}
      >
        {Appendix.map((item) => AppendixItem(item))}
      </Menu>
    </div>
  );
};

export default LayoutSider;
