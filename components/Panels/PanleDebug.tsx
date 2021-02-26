import MarkIcon from "../icons/antdIcons";
import { Card, Tooltip } from "antd";

const ConsoleControls = () => {
  return (
    <div className="inline-flex">
      <Tooltip title={"Step Forward"}>
        <MarkIcon type={"icon-next"} className={"m-3 text-2xl"} />
      </Tooltip>

      <Tooltip title={"Step Back"}>
        <MarkIcon type={"icon-84qianyibu"} className={"m-3 text-2xl"} />
      </Tooltip>

      <Tooltip title={"Step Inner"}>
        <MarkIcon type={"icon-stepin"} className={"m-3 text-2xl"} />
      </Tooltip>

      <Tooltip title={"Step Return"}>
        <MarkIcon type={"icon-stepout"} className={"m-3 text-2xl"} />
      </Tooltip>

      <Tooltip title={"History"}>
        <MarkIcon type={"icon-historyrecord"} className={"m-3 text-2xl"} />
      </Tooltip>
    </div>
  );
};

const PanelConsole = () => {
  return (
    <Card
      title={"debug"}
      className="w-full"
      extra={<ConsoleControls />}
      bodyStyle={{ maxHeight: 200 }}
    >
      {">>>"}
    </Card>
  );
};

export default PanelConsole;
