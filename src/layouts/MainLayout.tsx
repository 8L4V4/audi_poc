import React, { FC, ReactNode } from "react";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { NextPage } from "next";

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
