import * as Resizer from "../../LC_ResizableBar";
import PanelConsole from "./PanleConsole";
import CompSplitBar from "./CompSplitBar";
import PanelCode from "./PanleCode";
import { useState } from "react";
import dynamic from "next/dynamic";
import { PanelCase } from "./PanelCase";

const DisplayTrieDynamic = dynamic(import("../character/trie/DisplayTrie"), {
  ssr: false,
});

const GridAlgoVisualization = ({ CaseInput, CodeInput }) => {
  const modifyCase = (e) => setCase(e);
  const resetCase = () => setCase(CaseInput);
  const [Case, setCase] = useState(CaseInput);
  console.log({ CaseInMain: Case });

  return (
    <section>
      <Resizer.Container>
        <Resizer.Section minSize={600}>
          <DisplayTrieDynamic Case={Case} />
        </Resizer.Section>

        <CompSplitBar />

        <Resizer.Section>
          <PanelCase
            Case={Case}
            modifyCase={modifyCase}
            resetCase={resetCase}
          />
          <PanelCode Code={CodeInput} />
        </Resizer.Section>
      </Resizer.Container>
    </section>
  );
};

export default GridAlgoVisualization;
