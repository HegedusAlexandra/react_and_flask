import React, { memo } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Layout({ children }) {
  return (
    <div className="w-[100%] bg-red-400">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default memo(Layout);
