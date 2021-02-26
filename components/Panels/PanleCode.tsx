import { Card } from "antd";
import MonacoEditor from "@monaco-editor/react";

export const PanelCode = ({ Code: Code }) => {
  return (
    <Card title={"code"} bodyStyle={{ height: 600 }}>
      <MonacoEditor
        defaultPath={"code.cpp"}
        theme={"light"}
        defaultLanguage={"cpp"}
        defaultValue={Code}
        height={"500px"}
      />
    </Card>
  );
};

export default PanelCode;
