import { createElement, createContext, useContext } from "react";
import { setup } from "goober";

import Theme from "../styles/Theme";
import GlobalStyles from "../styles/Global";

const ThemeContext = createContext(Theme);
const useTheme = () => useContext(ThemeContext);

setup(createElement, undefined, useTheme);

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
