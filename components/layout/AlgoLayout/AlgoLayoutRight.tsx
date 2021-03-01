import { Button, Tabs } from "antd";
import { TabPane } from "rc-tabs";
import AlgoLayoutNote from "./AlgoLayoutNote";
import { useState } from "react";
import AlgoLayoutCompDev from "./AlgoLayoutCompDev";

export const AlgoLayoutRight = () => {
  const [activeKey, setActiveKey] = useState("1");
  return (
    <Tabs
      className="bg-white"
      type={"card"}
      style={{ height: 900 }}
      activeKey={activeKey}
      onChange={setActiveKey}
      tabBarExtraContent={
        activeKey == "1" ? (
          <div className="inline-flex">
            <Button type={"primary"} disabled={true} className={"mr-4"}>
              自动保存
            </Button>
            <Button type={"primary"} danger>
              发布
            </Button>
          </div>
        ) : (
          <div className="inline-flex">
            <Button type={"primary"} danger>
              运行
            </Button>
          </div>
        )
      }
    >
      <TabPane tab={"Note"} key={"1"}>
        <AlgoLayoutNote />
      </TabPane>

      <TabPane tab={"Develop"} key={"2"}>
        <AlgoLayoutCompDev />
      </TabPane>
    </Tabs>
  );
};

export default AlgoLayoutRight;
