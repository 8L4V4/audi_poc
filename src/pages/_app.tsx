import {MainLayout} from "../layouts/MainLayout";
import {NextPage} from "next";
import "assets/scss/index.scss"

interface iApp extends AppProps {
  Component: AppProps["Component"];
  pageProps: AppProps["pageProps"] & {[k: string]: any}
}

function App({ Component, pageProps }: iApp):NextPage {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
};

export default App;