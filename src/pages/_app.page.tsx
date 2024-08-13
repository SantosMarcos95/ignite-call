import { globalStyles } from "@/src/styles/global";
import { AppProps } from "next/app";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
