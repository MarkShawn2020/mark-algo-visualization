import { Component, useRef, useState } from "react";
import { Button, Card, message } from "antd";
import connectAlgoLayout from "../../../.old/connectAlgoLayout";
import React from "react";

class AlgoBubbleSort extends Component<any, any> {
  public setCurCase;
  public log;
  public refs;
  public N;

  init() {
    console.log("init");
    console.log(this.state);
    this.N = this.state.curCase.length;
    this.refs = new Array(this.N);
    this.refs.forEach((item) => {
      console.log(item.current);
    });
  }

  next() {
    console.log("next");
  }

  stop() {
    return true;
  }

  constructor(props) {
    super(props);
    this.setCurCase = props.setCurCase;
    this.log = props.log;
    this.refs = new Array(props.curCase.length);
    this.state = {
      curPos: -1,
      curCase: props.curCase,
    };
  }

  render() {
    return (
      <div className="w-full h-full flex flex-col justify-around items-center">
        {this.state.curCase.split("").map((item, index) => (
          <Button
            type={"primary"}
            size={"large"}
            key={index}
            ref={this.refs[index]}
          >
            {item}
          </Button>
        ))}
      </div>
    );
  }
}

export default connectAlgoLayout(
  AlgoBubbleSort,
  {
    nav: ["算法可视化", "经典排序", "冒泡排序"],
  },
  "accsa"
);
