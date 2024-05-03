import { Provider } from "react-redux";

import type { AppProps } from "next/app";
import RootLayout from "./layout";
import store from "@/store/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </Provider>
  );
}

export default MyApp;
