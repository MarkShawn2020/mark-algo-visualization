import G6 from "@antv/g6";
import { useEffect, useRef } from "react";
// import ReadFile from "../../../common/readFile";
// const Case = ReadFile("./case1.txt");
// console.log({ Case });

interface TrieItem {
  val: number | string;
  id?: number;
  end?: boolean;
  children?: TrieItem[];
}

const data: TrieItem = {
  val: "null",
  children: [
    {
      val: "s",
      children: [
        {
          val: "h",
          children: [
            {
              val: "e",
              end: true,
            },
            {
              val: "r",
              end: true,
            },
          ],
        },
        {
          val: "a",
          children: [
            {
              val: "y",
              end: true,
            },
          ],
        },
      ],
    },
    {
      val: "h",
      children: [
        {
          val: "e",
          end: true,
          children: [
            {
              val: "r",
              end: true,
            },
          ],
        },
      ],
    },
  ],
};

export const CompTrie = ({ width, height }) => {
  const ref = useRef(null);
  let graph = null;

  useEffect(() => {
    if (!graph) {
      graph = new G6.TreeGraph({
        container: "container",

        width: width,
        height: height,
        linkCenter: true,
        defaultNode: {
          size: 49,
          anchorPoints: [
            [0, 0.5],
            [1, 0.5],
          ],
        },
        defaultEdge: {
          type: "cubic-vertical",
          size: 3,
        },
        layout: {
          type: "compactBox",
          direction: "TB",
          getId: function getId(d) {
            return d.id;
          },
          getHeight: function getHeight() {
            return 16;
          },
          getWidth: function getWidth() {
            return 16;
          },
          getVGap: function getVGap() {
            return 80;
          },
          getHGap: function getHGap() {
            return 60;
          },
        },
      });

      graph.node((node: TrieItem) => {
        return {
          label: node.val,
          labelCfg: {
            fontSize: 30,
            position: "center",
            offset: 0,
            style: {
              rotate: 0,
              textAlign: "center",
            },
          },
          style: {
            lineWidth: node.end ? 3 : 1,
            // stroke: "red"
          },
        };
      });

      graph.data(data);
      console.log({ data });

      graph.render();
      graph.fitView();
    }
  }, []);

  return <div ref={ref} />;
};

export default CompTrie;
