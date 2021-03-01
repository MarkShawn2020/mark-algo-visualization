import React, { Component } from "react";
import { Button } from "antd";

const compAlgoVisualization = (WrappedComp, Nav, Case) => {
  class NewComp extends React.Component<any, any> {
    public init;
    public next;
    public stop;

    constructor(props) {
      super(props);
      console.log({ props, WrappedComp, wProps: WrappedComp.prototype });

      // 子组件的特例方法 -> 父组件的通用方法
      if (WrappedComp.prototype !== undefined) {
        this.init = WrappedComp.prototype.init?.bind(this);
        this.next = WrappedComp.prototype.next?.bind(this);
        this.stop = WrappedComp.prototype.stop?.bind(this);
        console.log(
          "Detected Class Component and methods `init, next, stop` bound"
        );
      } else {
        console.log("Function Component does not support prototype bind");
      }
      this.state = {
        Nav: null,
        Case: null,
      };
    }

    componentDidMount() {
      this.setState({ Nav });
      this.setState({ Case });
      console.log({ Nav, Case });
    }

    render() {
      return (
        <div className="w-screen h-screen flex flex-col justify-center items-center">
          <Button
            type={"primary"}
            onClick={this.init}
            className="mb-4"
            size={"large"}
            style={{ width: 100 }}
            disabled={this.init === undefined}
          >
            Click init
          </Button>
          <Button
            type={"primary"}
            onClick={this.next}
            className="mb-4"
            size={"large"}
            style={{ width: 100 }}
            disabled={this.next === undefined}
          >
            Click next
          </Button>
          <Button
            type={"primary"}
            onClick={this.stop}
            className="mb-4"
            size={"large"}
            style={{ width: 100 }}
            disabled={this.stop === undefined}
          >
            Click stop
          </Button>

          <br />
          <div>Nav: {Nav}</div>
          <div>Case: {Case}</div>

          <WrappedComp />
        </div>
      );
    }
  }

  return NewComp;
};

export default compAlgoVisualization;
