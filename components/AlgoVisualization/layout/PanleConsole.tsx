import MarkIcon from "../../icons/antdIcons";
import { Card } from "antd";

const ConsoleControls = () => {
  return (
    <div className="inline-flex">
      <MarkIcon type={"icon-next"} className={"m-3 text-2xl"} />
      <MarkIcon type={"icon-84qianyibu"} className={"m-3 text-2xl"} />
      <MarkIcon type={"icon-stepin"} className={"m-3 text-2xl"} />
      <MarkIcon type={"icon-stepout"} className={"m-3 text-2xl"} />
      <MarkIcon type={"icon-historyrecord"} className={"m-3 text-2xl"} />
    </div>
  );
};

const PanelConsole = () => {
  return (
    <Card title={"console"} className="w-full" extra={<ConsoleControls />}>
      {">>>"}
    </Card>
  );
};

export default PanelConsole;
