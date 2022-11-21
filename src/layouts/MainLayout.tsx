import React, { ReactNode } from "react";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
        {children}
      <Footer />
    </>
  );
}
