import { Button, Card } from "antd";
import SyntaxHighlighter from "react-syntax-highlighter";

const PanelTrieControl = ({ content, addChar, addStr, reRun }) => {
  return (
    <Card
      title={"console"}
      bodyStyle={{ height: 200 }}
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
          maxHeight: 200,
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

export default PanelTrieControl;
