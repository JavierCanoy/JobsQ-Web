import React from "react";
import Head from "next/head";
import OurWork from "../components/OurWork";
import Contact from "../components/Contact";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import Main from "../components/Main";
export default function Home() {
  console.log("index");

  return (
    <div className="homage-page">
      <Head>
        <title>Mabolotecth-Solution</title>
        <link rel="icon" href="/logo-web.png" />
      </Head>
      <Main />
      <AboutUs />
      <Services />
      <OurWork />
      <Contact />
    </div>
  );
}
