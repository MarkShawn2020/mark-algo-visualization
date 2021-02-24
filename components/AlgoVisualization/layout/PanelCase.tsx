import { Card } from "antd";
import SyntaxHighlighter from "react-syntax-highlighter";

const PanelCase = ({ Case }) => {
  return (
    <Card title={"case"}>
      <SyntaxHighlighter language={"text"}>{Case || ""}</SyntaxHighlighter>
    </Card>
  );
};

export default PanelCase;
