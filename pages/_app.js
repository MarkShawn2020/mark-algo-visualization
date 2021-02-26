import "antd/dist/antd.css";
import "../styles/globals.css";
import { ConfigProvider } from "antd";

function MyApp({ Component, pageProps }) {
  return (
    <ConfigProvider componentSize={"small"}>
      <Component {...pageProps} />;
    </ConfigProvider>
  );
}

export default MyApp;
