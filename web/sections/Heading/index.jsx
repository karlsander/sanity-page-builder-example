/** @jsx jsx */
import { jsx } from "@theme-ui/core";

import Link from "next/link";
import Head from "next/head";

function Heading({ heading }) {
  return (
    <div>
      <h1>{heading}</h1>
      <Head>
        <title>Hi</title>
      </Head>
      <Link href="/test">test</Link>
    </div>
  );
}

export { Heading };
