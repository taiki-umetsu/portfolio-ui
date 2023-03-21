import React, { FC } from "react";
import Head from "next/head";

interface GoogleAnalyticsProps {
  trackingId: string;
}

const GoogleAnalytics: FC<GoogleAnalyticsProps> = ({ trackingId }) => {
  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`}
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${trackingId}');
          `,
        }}
      />
    </>
  );
};

export default GoogleAnalytics;
