import { Button, Card, message, Tooltip } from "antd";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
const MonacoEditor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
});

const CaseControls = ({ onModify, onReset }) => {
  return (
    <div>
      <Button type={"primary"} onClick={onModify} className="mr-4">
        修改测例
      </Button>
      <Button type={"primary"} danger onClick={onReset} className="mr-4">
        重置测例
      </Button>
    </div>
  );
};

export const PanelCase = ({ Case, modifyCase, resetCase }) => {
  const handleModifyCase = (e) => {
    modifyCase(e);
    message.success({ content: "已经重设测例，可重新运行~" }).then(null);
  };
  return (
    <Card
      title={"case"}
      extra={
        <CaseControls
          onModify={() => handleModifyCase(Case)}
          onReset={resetCase}
        />
      }
    >
      <MonacoEditor
        theme={"light"}
        value={Case}
        onChange={(e) => (Case = e)}
        height={"100px"}
        options={{
          minimap: { enabled: false },
        }}
      />
    </Card>
  );
};
