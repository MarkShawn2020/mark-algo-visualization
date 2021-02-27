import { Card } from "antd";
import MonacoEditor from "@monaco-editor/react";

export const PanelCode = ({ Code: Code }) => {
  return (
    <Card
      title={"code"}
      style={{ height: 900 }}
      bodyStyle={{ height: 850 }}
      className="lg:visible"
    >
      <MonacoEditor
        defaultPath={"code.cpp"}
        theme={"light"}
        defaultLanguage={"cpp"}
        defaultValue={Code}
      />
    </Card>
  );
};

export default PanelCode;
