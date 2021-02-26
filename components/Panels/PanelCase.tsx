import { Button, Card, message } from "antd";
import MonacoEditor from "@monaco-editor/react";

const CaseControls = ({ onModify, onReset }) => {
  return (
    <div className="inline-flex">
      <Button
        type={"primary"}
        size={"small"}
        onClick={onModify}
        className="mr-4"
      >
        修改测例
      </Button>
      <Button
        type={"primary"}
        size={"small"}
        danger
        onClick={onReset}
        className="mr-4"
      >
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
      bodyStyle={{ height: 200 }}
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

export default PanelCase;
