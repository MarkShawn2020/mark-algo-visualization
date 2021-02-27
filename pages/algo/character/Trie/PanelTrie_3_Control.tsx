import { Button, Card } from "antd";
import SyntaxHighlighter from "react-syntax-highlighter";

const PanelTrie_3_Control = ({ content, addChar, addStr, reRun }) => {
  return (
    <Card
      title={"console"}
      style={{ height: 250 }}
      extra={
        <div className="inline-flex">
          <Button type={"primary"} className="mr-2" onClick={addChar}>
            下一个字符
          </Button>

          <Button type={"primary"} className="mr-2" onClick={addStr}>
            下一个字符串
          </Button>

          <Button type={"primary"} danger className="mr-2" onClick={reRun}>
            重新运行
          </Button>
        </div>
      }
    >
      <SyntaxHighlighter
        language={"plain-text"}
        customStyle={{
          maxHeight: 180,
          overflow: "auto",
          display: "flex",
          flexDirection: "column-reverse",
        }}
      >
        {content.join("\n")}
      </SyntaxHighlighter>
    </Card>
  );
};

export default PanelTrie_3_Control;
