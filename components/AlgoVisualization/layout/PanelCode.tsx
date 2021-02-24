import { Card } from "antd";
import SyntaxHighlighter from "react-syntax-highlighter";

const PanelCode = ({ Code }) => {
  return (
    <Card title={"code"}>
      <SyntaxHighlighter
        language="CPP"
        customStyle={{ maxHeight: 600, fontSize: 12 }}
      >
        {Code || ""}
      </SyntaxHighlighter>
    </Card>
  );
};

export default PanelCode;
