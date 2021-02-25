import { Card } from "antd";

import dynamic from "next/dynamic";
const MonacoEditor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
});

export const PanelCode = ({ Code: Code }) => {
  return (
    <Card title={"code"}>
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
