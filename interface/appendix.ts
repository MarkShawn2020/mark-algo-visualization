export interface AppendixItem_I {
  key?: string;
  title_cn: string;
  path?: string;
  icon?: string;
  children?: AppendixItem_I[];
}

export const Appendix: AppendixItem_I[] = [
  {
    title_cn: "经典排序",
    icon: "icon-sort",
    children: [
      {
        title_cn: "冒泡排序",
        path: "/algo/sort/bubble_sort",
      },
      {
        title_cn: "插入排序",
        path: "/algo/basic/divide",
      },
      {
        title_cn: "插入排序",
        path: "/algo/sort/insertion_sort",
      },
      {
        title_cn: "选择排序",
        path: "/algo/sort/selection_sort",
      },
      {
        title_cn: "快排",
        path: "/algo/sort/quick_sort",
      },
      {
        title_cn: "归并排序",
        path: "/algo/sort/merge_sort",
      },
      {
        title_cn: "希尔排序",
        path: "/algo/sort/shell_sort",
      },
      {
        title_cn: "猴子排序",
        path: "/algo/sort/mongo_sort",
      },
    ],
  },
  {
    title_cn: "基础思想",
    icon: "icon-Icons_Basic_Opti",
    children: [
      {
        title_cn: "贪心法",
        path: "/algo/basic/greedy",
      },
      {
        title_cn: "分而治之",
        path: "/algo/basic/divide",
      },
      {
        title_cn: "减而治之",
        path: "/algo/basic/reduce",
      },
    ],
  },
  {
    title_cn: "搜索技术",
    icon: "icon-chaxun",
    children: [
      {
        title_cn: "BFS",
        path: "/algo/search/BFS",
      },
      {
        title_cn: "DFS",
        path: "/algo/search/DFS",
      },
    ],
  },
  {
    title_cn: "图论",
    icon: "icon-tuluntuilisuanfa",
    children: [
      {
        title_cn: "最短路径",
        children: [
          {
            title_cn: "Dijkstra",
          },
          {
            title_cn: "SPFA",
          },
          {
            title_cn: "Floyd",
          },
          {
            title_cn: "Bellman-Ford",
          },
        ],
      },
      {
        title_cn: "Tarjan",
      },
    ],
  },
  {
    title_cn: "树算法",
    icon: "icon-shu",
    children: [
      {
        title_cn: "二叉树",
      },
      {
        title_cn: "线段树",
      },
      {
        title_cn: "树状数组",
      },
    ],
  },
  {
    title_cn: "并查集",
    icon: "icon-hebingchakan",
    children: [],
  },
  {
    title_cn: "动态规划",
    icon: "icon-zu2",
    children: [
      {
        title_cn: "基础DP",
      },
      {
        title_cn: "递推与记忆化搜索",
      },
      {
        title_cn: "区间DP",
      },
      {
        title_cn: "树形DP",
      },
      {
        title_cn: "数位DP",
      },
      {
        title_cn: "状态压缩DP",
      },
      {
        title_cn: "环上DP",
      },
    ],
  },
  {
    title_cn: "字符串",
    icon: "icon-zifuchuan",
    children: [
      {
        title_cn: "字符串哈希",
        path: "/algo/character/hash",
      },
      {
        title_cn: "字典树",
        path: "/algo/character/Trie",
      },
      {
        title_cn: "KMP算法",
        path: "/algo/character/KMP",
      },
      {
        title_cn: "AC自动机",
        path: "/algo/character/AC",
      },
      {
        title_cn: "后缀树与后缀树组",
        path: "/algo/character/suffix",
      },
    ],
  },
  {
    key: "math",
    title_cn: "数学",
    icon: "icon-shuxue-cuotiben1",
    children: [
      {
        title_cn: "高精度计算",
      },
      {
        title_cn: "快速幂",
      },
      {
        title_cn: "GCD、LCM",
      },
      {
        title_cn: "扩展欧几里得算法",
      },
      {
        title_cn: "同余和逆元",
      },
      {
        title_cn: "素数",
      },
    ],
  },
  {
    title_cn: "计算几何",
    icon: "icon-jihe",
    children: [
      {
        title_cn: "凸包",
      },
      {
        title_cn: "三维凸包",
      },
      {
        title_cn: "几何模板",
      },
    ],
  },
];
