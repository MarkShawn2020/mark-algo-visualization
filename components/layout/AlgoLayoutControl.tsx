import { Button, Card } from "antd";
import SyntaxHighlighter from "react-syntax-highlighter";

interface extraControlsI {
  value: string;
  method: (event: any) => void;
}

interface AlgoLayoutControlI {
  content: Array<string>;
  reRun: (event: any) => void;
  extraControls: extraControlsI[];
}

const AlgoLayoutControl = ({
  content,
  reRun,
  extraControls,
}: AlgoLayoutControlI) => {
  return (
    <Card
      title={"console"}
      style={{ height: 250 }}
      extra={
        <div className="inline-flex">
          {extraControls.map(({ value, method }, index) => (
            <Button
              type={"primary"}
              className="mr-2"
              onClick={method}
              key={index}
            >
              {value}
            </Button>
          ))}

          <Button type={"primary"} danger className="mr-2" onClick={reRun}>
            重新运行
          </Button>
        </div>
      }
    >
      <SyntaxHighlighter
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

export default AlgoLayoutControl;
