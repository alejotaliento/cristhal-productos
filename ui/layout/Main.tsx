import React from "react";

import { Header, Footer } from "../Components";

const Main: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Main;
