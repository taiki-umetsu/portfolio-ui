import { Html, Head, Main, NextScript } from "next/document";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Favicon from "@/components/Favicon";
import Fonts from "@/components/Fonts";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Fonts />
        <Favicon />
        <GoogleAnalytics trackingId="G-6K3R3YVDKZ" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
