import React from "react";
import { StyleSheet } from "aphrodite";
import "../styles/globals.css";
import { RecoilRoot } from "recoil";
import Head from "next/head";

// Rehydrate to ensure that the client doesn't duplicate styles
// It has to execute before any code that defines styles
// '__REHYDRATE_IDS' is set in '_document.js'
if (typeof window !== "undefined") {
  StyleSheet.rehydrate(window.__REHYDRATE_IDS);
}

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Head>
        <title>Developers Guild</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://da-developers.dev/" />
        <meta
          name="description"
          content="Developers’ Guild started in 2014 with the goal of facilitating the exploration of computer science through hands-on experience. Developers’ Guild creates a casual environment to practice real-world programming. We foster a community of avid programmers by tackling projects that interest us, participating and competing in events, and gathering skills and experience for the future."
        />
        <meta property="og:image" content="https://da-developers.dev/og.jpg" />
        <meta
          property="og:image:url"
          content="https://da-developers.dev/og.jpg"
        />
        <meta
          property="og:image:secure_url"
          content="https://da-developers.dev/og.jpg"
        />
        <meta property="og:image:type" content="image/jpeg" />
        <meta
          property="og:description"
          content="Developers’ Guild started in 2014 with the goal of facilitating the exploration of computer science through hands-on experience. Developers’ Guild creates a casual environment to practice real-world programming. We foster a community of avid programmers by tackling projects that interest us, participating and competing in events, and gathering skills and experience for the future."
        />
        <meta property="og:title" content="Developers Guild" />
        <meta property="og:type" content="website" />
      </Head>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
