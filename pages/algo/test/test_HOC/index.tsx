import compAlgoVisualization from "./connectAlgoVisualization";
import { Button } from "antd";
import React, { Component } from "react";

export class TestWrap extends Component<any, any> {
  init() {
    console.log("init");
  }

  next() {
    console.log("next");
  }

  // stop() {
  //   console.log("stop");
  // }

  render() {
    return (
      <div className="">
        <Button type={"primary"} size={"large"} onClick={this.next}>
          Click Next in Wrapped
        </Button>
      </div>
    );
  }
}

export default compAlgoVisualization(TestWrap, ["xx", "xxxx"], "xxxxxxxxxx");
