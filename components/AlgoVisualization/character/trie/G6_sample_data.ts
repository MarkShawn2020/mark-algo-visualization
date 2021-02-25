import { TreeSeriesNodeItemOption } from "echarts/types/src/chart/tree/TreeSeries";

export interface TrieNodeItemOption extends TreeSeriesNodeItemOption {
  id: number;
  children?: TrieNodeItemOption[];
}

const SampleData: TrieNodeItemOption = {
  id: 0,
  name: "null",
  value: "",
  children: [
    {
      id: 1,
      name: "s",
      value: "s",
      children: [
        {
          id: 2,
          name: "h",
          value: "sh",
          children: [
            {
              id: 3,
              name: "e",
              value: "she",
            },
            {
              id: 4,
              name: "r",
              value: "shr",
            },
          ],
        },
        {
          id: 5,
          name: "a",
          value: "sa",
          children: [
            {
              id: 6,
              name: "y",
              value: "say",
            },
          ],
        },
      ],
    },
    {
      id: 7,
      name: "h",
      value: "h",
      children: [
        {
          id: 8,
          name: "e",
          value: "he",
          children: [
            {
              id: 9,
              name: "r",
              value: "her",
            },
          ],
        },
      ],
    },
  ],
};

export default SampleData;
