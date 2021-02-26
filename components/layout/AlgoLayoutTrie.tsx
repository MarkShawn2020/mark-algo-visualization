import AlgoLayout from "./AlgoLayout";
import * as Resizer from "../LC_ResizableBar";
import CompSplitBar from "../common/CompSplitBar";
import { PanelCase } from "../Panels/PanelCase";
import PanelCode from "../Panels/PanleCode";

export const AlgoLayoutTrie = ({
  Case,
  Code,
  modifyCase,
  resetCase,
  children,
}) => {
  return (
    <AlgoLayout>
      <section>
        <Resizer.Container>
          {/* display and control */}
          {children}

          <CompSplitBar />

          {/* case and code */}
          <Resizer.Section>
            <PanelCase
              Case={Case}
              modifyCase={modifyCase}
              resetCase={resetCase}
            />
            <PanelCode Code={Code} />
          </Resizer.Section>
        </Resizer.Container>
      </section>
    </AlgoLayout>
  );
};

export default AlgoLayoutTrie;
