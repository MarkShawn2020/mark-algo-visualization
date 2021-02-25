import * as Resizer from "../../LC_ResizableBar";

export const CompSplitBar = () => {
  return (
    <Resizer.Bar
      size={10}
      className="bg-gray-200 flex justify-center items-center text-white  "
    >
      {"|||"}
    </Resizer.Bar>
  );
};

export default CompSplitBar;
