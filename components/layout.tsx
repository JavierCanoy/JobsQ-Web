import React, { ReactNode } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="layout-main">
      {/* header */}
      <Header />

      <main>{children}</main>

      {/* footer */}
      <Footer />
    </div>
  );
}
