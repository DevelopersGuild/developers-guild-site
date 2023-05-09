import React from "react";
import "../styles/globals.css";
import Layout from "../components/Layout";
import 'bootstrap/dist/css/bootstrap.css';

// Rehydrate to ensure that the client doesn't duplicate styles
// It has to execute before any code that defines styles
// '__REHYDRATE_IDS' is set in '_document.js'
/*if (typeof window !== "undefined") {
  StyleSheet.rehydrate(window.__REHYDRATE_IDS);
}*/

function MyApp({ Component, pageProps }) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  );
}

export default MyApp;
