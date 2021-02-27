import { Breadcrumb, Button, Card } from "antd";

const CompBreadcrumb = ({ paths }) => (
  <div>
    <Breadcrumb>
      {(paths as Array<string>).map((s, i) => (
        <Breadcrumb.Item key={i}>{s}</Breadcrumb.Item>
      ))}
    </Breadcrumb>
  </div>
);

export const AlgoLayoutDisplay = ({ paths, children }) => {
  return (
    <Card
      title={<CompBreadcrumb paths={paths} />}
      style={{ height: 450 }}
      bodyStyle={{ maxHeight: 400 }}
      extra={
        <div className="inline-flex">
          <Button type={"primary"} className="mr-2">
            介绍
          </Button>

          <Button type={"primary"} danger className="mr-2">
            图示
          </Button>
        </div>
      }
    >
      {children}
    </Card>
  );
};

export default AlgoLayoutDisplay;
