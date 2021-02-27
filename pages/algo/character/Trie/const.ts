import { TrieNodeItemOption, TrieOption } from "./Trie";

export const defaultRoot: TrieNodeItemOption = {
  id: 0,
  name: "root",
  value: "",
  itemStyle: {
    borderColor: "#666",
  },
  children: [],
  symbol: "roundRect",
  symbolSize: 50,
};

export const defaultOption: TrieOption = {
  tooltip: {
    trigger: "item",
    triggerOn: "mousemove",
  },

  series: [
    {
      type: "tree",
      data: [],

      left: "2%",
      right: "2%",
      top: "8%",
      bottom: "20%",

      symbol: "circle",
      symbolSize: 40,
      orient: "vertical",
      expandAndCollapse: false, // 是否自动收起结点：否。否则不利于动画演示

      label: {
        position: "inside",
        rotate: 0,
        verticalAlign: "middle",
        align: "center",
        fontSize: 20,
      },

      tooltip: {
        formatter: ({ data }) =>
          ["id: " + data.id, "value: " + data.value].join("</br>"),
      },

      animationDurationUpdate: 750,
    },
  ],
};
