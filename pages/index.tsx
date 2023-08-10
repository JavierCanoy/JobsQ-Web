import React from "react";
import Head from "next/head";
import OurWork from "../components/OurWork";
import Contact from "../components/Contact";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import Main from "../components/Main";
export default function Home() {
  return (
    <div className="homage-page">
      https://app.slack.com/ssb/signin?ssb_vid=.b242426456d6616543df7c5372067807&ssb_instance_id=b2e91f18-fec5-4036-b341-1031a34cf255&v=4.33.84&from_desktop_app=1#/signin{" "}
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
