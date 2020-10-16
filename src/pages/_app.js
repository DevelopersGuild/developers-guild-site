import React from "react";
import { RecoilRoot } from "recoil";
import "../styles/bootstrap.min.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
};

export default MyApp;
