import { Button, Card, Input } from "antd";
const { TextArea } = Input;

export const AlgoLayoutCase = ({ Case, modifyCase, updateCase, resetCase }) => {
  return (
    <Card
      title={"Input"}
      style={{ height: 200 }}
      extra={
        <div className="inline-flex">
          <Button
            type={"primary"}
            size={"small"}
            onClick={() => updateCase(Case)}
            className="mr-4"
          >
            更新测例
          </Button>

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

export default AlgoLayoutCase;
