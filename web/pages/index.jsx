/** @jsx jsx */
import { jsx } from "@theme-ui/core";
import { client } from "web/util/client";
import { PageTemplate } from "web/components/PageTemplate";

export async function getStaticProps() {
  const { blocks } = await client.fetch(
    `*[_type == "page" && slug.current == "index"][0]`
  );
  return { props: { blocks } };
}

export default function Page({ blocks }) {
  return <PageTemplate blocks={blocks} />;
}
