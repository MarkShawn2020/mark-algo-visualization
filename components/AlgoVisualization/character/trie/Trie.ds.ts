import { TreeSeriesOption } from "echarts/charts";
import { TrieNodeItemOption } from "./G6_sample_data";
import { EChartOption } from "echarts";

export interface TrieSeries extends Omit<TreeSeriesOption, "data"> {
  data: TrieNodeItemOption[];
}

export interface TrieOption extends Omit<EChartOption, "series"> {
  series: TrieSeries[];
}

export interface DisplayTrieProps {
  Case: string;
}
