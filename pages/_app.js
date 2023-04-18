import RootLayout from "@/Layout/RootLayout";
import { store } from "@/redux/store";
import "@/styles/globals.scss";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </Provider>
  );
}
