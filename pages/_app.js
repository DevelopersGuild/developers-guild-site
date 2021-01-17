import { StyleSheet, css } from "aphrodite";
import "../styles/globals.css";

// Rehydrate to ensure that the client doesn't duplicate styles
// It has to execute before any code that defines styles
// '__REHYDRATE_IDS' is set in '_document.js'
if (typeof window !== "undefined") {
  StyleSheet.rehydrate(window.__REHYDRATE_IDS);
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
