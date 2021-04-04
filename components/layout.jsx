import React from 'react';
import Head from 'next/head'

import NavbarMain from './NavbarMain.react';
import Footer from './footer';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
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
      <NavbarMain />
      <main>{children}</main>
      {/* <Footer /> */}
    </React.Fragment>
  );
}

export default Layout;