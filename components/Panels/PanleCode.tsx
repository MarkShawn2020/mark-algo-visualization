import { Card } from "antd";
import MonacoEditor from "@monaco-editor/react";

export const PanelCode = () => {
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
        defaultValue=""
      />
    </Card>
  );
};

export default PanelCode;
