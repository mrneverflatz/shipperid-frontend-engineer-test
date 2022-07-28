import "assets/styles/globals.css";
import type { AppProps } from "next/app";
import Router from "next/router";

import store from "lib/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";

Router.ready(() => {
  Router.events.on("routeChangeStart", () => {});
});

const persistor = persistStore(store);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
