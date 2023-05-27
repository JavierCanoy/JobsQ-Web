import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "@/components/footer";
import Header from "@/components/header";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="layout">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
