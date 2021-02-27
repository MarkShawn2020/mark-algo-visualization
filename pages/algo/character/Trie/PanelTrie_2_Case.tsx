import { Button, Card, message, Input } from "antd";
import { useRef, useState } from "react";
const { TextArea } = Input;

export const PanelTrie_2_Case = ({ Case, modifyCase, resetCase }) => {
  return (
    <Card
      title={"case"}
      style={{ height: 200 }}
      extra={
        <div className="inline-flex">
          <Button
            type={"primary"}
            size={"small"}
            danger
            onClick={resetCase}
            className="mr-4"
          >
            重置测例
          </Button>
        </div>
      }
    >
      <TextArea
        value={Case}
        onChange={(e) => modifyCase(e.target.value)}
        autoSize={{ minRows: 3, maxRows: 5 }}
        style={{ maxHeight: 150 }}
      />
    </Card>
  );
};

export default PanelTrie_2_Case;
