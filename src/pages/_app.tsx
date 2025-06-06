import type { AppProps } from "next/app";
import "../styles/global.css"
import "xp.css/dist/XP.css"

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
