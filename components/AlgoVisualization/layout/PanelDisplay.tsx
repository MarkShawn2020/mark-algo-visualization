import { Card } from "antd";
import dynamic from "next/dynamic";
const CompTrie = dynamic(() => import("../character/trie/Trie"), {
  ssr: false,
});

const PanelDisplay = () => {
  return (
    <Card title={"display"} id={"container"}>
      <CompTrie width={600} height={600} />
    </Card>
  );
};

export default PanelDisplay;
