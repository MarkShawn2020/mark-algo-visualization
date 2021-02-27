import { TreeSeriesOption } from "echarts/charts";
import { EChartOption } from "echarts";

import { TreeSeriesNodeItemOption } from "echarts/types/src/chart/tree/TreeSeries";
import Tooltip = echarts.EChartOption.Tooltip;

export interface TrieNodeItemOption extends TreeSeriesNodeItemOption {
  id: number;
  children?: TrieNodeItemOption[];
  tooltip?: Tooltip;
}
export interface TrieSeries extends Omit<TreeSeriesOption, "data"> {
  data: TrieNodeItemOption[];
}

export interface TrieOption extends Omit<EChartOption, "series"> {
  series: TrieSeries[];
}

export interface DisplayTrieProps {
  Case: string;
}
