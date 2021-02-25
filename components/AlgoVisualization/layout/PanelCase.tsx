import { Card } from "antd";
import SyntaxHighlighter from "react-syntax-highlighter";

interface PanelCase {
  Case: string;
}

const PanelCase = ({ Case }: PanelCase) => {
  return (
    <Card title={"case"}>
      <SyntaxHighlighter language={"text"}>{Case}</SyntaxHighlighter>
    </Card>
  );
};

export default PanelCase;
