import AlgoLayout from "./AlgoLayout";
import * as Resizer from "../LC_ResizableBar";
import CompSplitBar from "../common/CompSplitBar";
import PanelCode from "../Panels/PanleCode";

export const AlgoLayoutTrie = ({ Code, children }) => {
  return (
    <AlgoLayout>
      <section>
        <Resizer.Container>
          {/* display and control */}
          <Resizer.Section minSize={600}>{children}</Resizer.Section>

          <CompSplitBar />

          {/* case and code */}
          <Resizer.Section>
            <PanelCode Code={Code} />
          </Resizer.Section>
        </Resizer.Container>
      </section>
    </AlgoLayout>
  );
};

export default AlgoLayoutTrie;
