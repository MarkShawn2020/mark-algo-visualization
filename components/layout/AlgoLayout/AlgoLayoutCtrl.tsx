import { Button, Card } from "antd";
import SyntaxHighlighter from "react-syntax-highlighter";

export interface DControls {
  value: string;
  method: (event: any) => void;
  disabled?: boolean;
}

interface IAlgoLayoutControlProps {
  content: string;
  next: (event: any) => void;
  stop?: any;
  reRun: (event: any) => void;
  extraControls?: DControls[];
}

const AlgoLayoutCtrl = ({
  content,
  next,
  stop,
  reRun,
  extraControls,
}: IAlgoLayoutControlProps) => {
  // console.log({ stop });
  return (
    <Card
      title={"Output"}
      style={{ height: 250 }}
      extra={
        <div className="inline-flex">
          {(extraControls || []).map(({ value, method, disabled }, index) => (
            <Button
              type={"primary"}
              className="mr-4"
              onClick={method}
              key={index}
              disabled={disabled}
            >
              {value}
            </Button>
          ))}

          <Button
            type={"primary"}
            className="mr-4"
            onClick={next}
            disabled={stop}
          >
            下一步
          </Button>

          <Button type={"primary"} danger onClick={reRun} className="mr-4">
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
        {content}
      </SyntaxHighlighter>
    </Card>
  );
};

export default AlgoLayoutCtrl;
