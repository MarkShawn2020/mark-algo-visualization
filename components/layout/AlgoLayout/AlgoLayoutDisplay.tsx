import { Breadcrumb, Button, Card } from "antd";

export const CompBreadcrumb = ({ nav }) => (
  <div>
    <Breadcrumb>
      {(nav as Array<string>).map((s, i) => (
        <Breadcrumb.Item key={i}>{s}</Breadcrumb.Item>
      ))}
    </Breadcrumb>
  </div>
);

export const AlgoLayoutDisplay = ({ nav, children }) => {
  return (
    <Card
      title={<CompBreadcrumb nav={nav} />}
      style={{ height: 450 }}
      bodyStyle={{ height: 400 }}
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
