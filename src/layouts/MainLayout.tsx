import React, {FC} from "react";
import {Header} from "./Header/Header";
import {Footer} from "./Footer/Footer";
import {NextPage} from "next";

export function MainLayout ({children}): NextPage {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};