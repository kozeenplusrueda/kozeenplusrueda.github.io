import React from "react";
import Head from "next/head";

const CommonMeta = () => {
  return (
    <Head>
      <meta name="referrer" content="origin" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, viewport-fit=cover"
      />
      <meta
        name="keywords"
        content="Architecture Bureau Studio Design Interior Бюро Студия Архитектура Дизайн"
      />
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="https://kozeenplusrueda.com/" />
      <meta property="og:locale" content="en_US" />
      <link
        rel="prefetch"
        href="/fonts/AeonikFono-Regular.woff2"
        as="font"
        type="font/woff2"
        crossOrigin=""
      />
      {/* <link
        rel="preload"
        href="/fonts/AeonikFono-Bold.woff2"
        as="font"
        crossOrigin=""
        type="font/woff2"
      /> */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#FF4D00"></meta>
    </Head>
  );
};

export default CommonMeta;
