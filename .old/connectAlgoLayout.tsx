import React, { Children, Component } from "react";
import { Button, Card, message } from "antd";
import { CompBreadcrumb } from "../components/layout/AlgoLayout/AlgoLayoutDisplay";
import AlgoLayoutCtrl from "../components/layout/AlgoLayout/AlgoLayoutCtrl";
import AlgoLayoutCase from "../components/layout/AlgoLayout/AlgoLayoutCase";
import AlgoLayoutBase from "../components/layout/AlgoLayout/AlgoLayoutBase";
import { AlgoLog } from "../functions/algoLog";
import { AlgoInfoProps } from "../interface/AlgoVisualization";

export const connectAlgoLayout = (
  WrappedComponent,
  info: AlgoInfoProps,
  defaultCase
) => {
  return class AlgoLayout extends Component<any, any> {
    public init;
    public next;
    public stop;
    public extras = [];
    public log;

    constructor(props) {
      super(props);
      if (WrappedComponent.prototype === undefined) {
        throw new Error("必须使用Class组件构建子组件");
      }
      this.init = WrappedComponent.prototype.init.bind(this);
      this.next = WrappedComponent.prototype.next.bind(this);
      this.stop = WrappedComponent.prototype.stop.bind(this);
      const name = info.name || info.nav[info.nav.length - 1];
      this.log = new AlgoLog(`程序<${name}>已启动`);

      this.state = {
        defaultCase,
        inputCase: defaultCase,
        name,
        nav: info.nav,
      };
      console.log(this.state);
    }

    modifyCase(s: string) {
      this.setState({ inputCase: s });
      this.init();
    }

    updateCase() {
      console.log("update"); // todo
    }

    resetCase() {
      this.setState({ inputCase: this.state.defaultCase });
      this.init();
    }

    render() {
      return (
        <AlgoLayoutBase>
          <Card
            title={<CompBreadcrumb nav={this.state?.nav} />}
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
            {React.cloneElement(<WrappedComponent />, {
              curCase: this.state.inputCase,
              setCurCase: this.modifyCase,
              log: this.log,
            })}
          </Card>

          <AlgoLayoutCtrl
            content={this.log.output()}
            next={() => {
              if (this.stop()) {
                message.error({ content: "算法已完成，请重新运行！" });
                return;
              }
              console.log("next step");
              this.next();
            }}
            stop={this.stop()}
            reRun={this.init}
            extraControls={this.extras}
          />

          <AlgoLayoutCase
            Case={this.state.inputCase}
            modifyCase={this.modifyCase}
            resetCase={this.resetCase}
            updateCase={this.updateCase}
          />
        </AlgoLayoutBase>
      );
    }
  };
};

export default connectAlgoLayout;
