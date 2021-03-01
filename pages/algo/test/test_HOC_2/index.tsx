import connectAlgoLayout from "../../../../.old/connectAlgoLayout";
import { Component } from "react";

class RandomAlgoWrapped extends Component<any, any> {
  init() {
    console.log("init 我直呼牛逼");
  }

  next() {
    console.log("init 我直呼牛逼");
  }

  stop() {
    return true;
  }

  render() {
    return <div>Hello</div>;
  }
}

export default connectAlgoLayout(
  RandomAlgoWrapped,
  { nav: ["算法可视化", "排序算法", "随机算法"] },
  "xxxaasccs"
);
