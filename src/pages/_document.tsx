import { CompanyIcon } from "@/components/icons/logo";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <title>TalentSync</title>
          <meta name="title" content='TalentSync' />
          <meta name="description" content='TalentSync frontend test from Idris Babatunde' />
          <link rel="icon" href='../../assets/images/logo.svg' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
