import { Button, Card, Tabs } from "antd";
import MonacoEditor from "@monaco-editor/react";
import { useState } from "react";
import MarkdownPreview from "../../md_preview";

const DefaultNote = `
# 这里可以记录你的笔记
> 支持 Markdown 实时渲染 ~
`;

export const AlgoLayoutNote = () => {
  const [note, setNote] = useState(DefaultNote);
  return (
    <>
      <MonacoEditor
        defaultPath={"code.cpp"}
        theme={"light"}
        defaultLanguage={"markdown"}
        defaultValue={note}
        onChange={setNote}
        height={400}
      />
      <Card
        title={"Preview"}
        style={{ height: 450 }}
        bodyStyle={{ height: 400 }}
      >
        <MarkdownPreview
          source={note}
          style={{ maxHeight: 400, overflowY: "scroll" }}
        />
      </Card>
    </>
  );
};

export default AlgoLayoutNote;
