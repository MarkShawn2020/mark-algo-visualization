import { Card } from "antd";
import dynamic from "next/dynamic";
import * as Resizer from "../LeetcodeOpenSource";
import SyntaxHighlighter from "react-syntax-highlighter";

const CompTrie = dynamic(() => import("./character/trie/Trie"), { ssr: false });

import { readFileSync } from "fs";
import { join } from "path";
const Code = readFileSync(
  join(__dirname, "./character/trie/ac-trie.cpp"),
  "utf8"
);
const Case = readFileSync(
  join(__dirname, "./character/trie/case1.txt"),
  "utf-8"
);

const CompLeft = () => (
  <div>
    <Card title={"display"} id={"container"}>
      <CompTrie width={600} height={600} />
    </Card>

    <Card title={"console"} className="w-full">
      {">>>"}
    </Card>
  </div>
);

const CompRight = () => (
  <div>
    <Card title={"code"}>
      <SyntaxHighlighter
        language="CPP"
        customStyle={{ maxHeight: 600, fontSize: 12 }}
      >
        {Code}
      </SyntaxHighlighter>
    </Card>

    <Card title={"case"}>
      <SyntaxHighlighter language={"text"}>{Case}</SyntaxHighlighter>
    </Card>
  </div>
);

export const CompAlgoVisualization = () => {
  return (
    <section>
      <Resizer.Container>
        <Resizer.Section minSize={600}>
          <CompLeft />
        </Resizer.Section>

        <Resizer.Bar size={10} className="bg-gray-200" />

        <Resizer.Section>
          <CompRight />
        </Resizer.Section>
      </Resizer.Container>
    </section>
  );
};

export default CompAlgoVisualization;
