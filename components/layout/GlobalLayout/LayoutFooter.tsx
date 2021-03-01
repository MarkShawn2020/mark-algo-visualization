export const LayoutFooter = () => {
  return (
    <div className="inline-flex justify-center">
      <div className={"mr-4"}>
        联系管理员（南川）：{" "}
        <a href={"mailto:" + process.env.NEXT_PUBLIC_EMAIL}>
          {process.env.NEXT_PUBLIC_EMAIL}
        </a>
      </div>
      <div>
        备案号：{" "}
        <a
          href={"https://beian.miit.gov.cn/#/Integrated/index"}
          target={"_blank"}
        >
          苏ICP备19039117号-1
        </a>
      </div>
    </div>
  );
};

export default LayoutFooter;
