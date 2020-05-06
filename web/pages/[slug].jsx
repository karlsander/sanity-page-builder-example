/** @jsx jsx */
import { jsx } from "@theme-ui/core";
import { client } from "web/util/client";
import { PageTemplate } from "web/components/PageTemplate";

export async function getStaticProps({ params: { slug = "" } }) {
  const { blocks } = await client.fetch(
    `*[_type == "page" && slug.current == $slug][0]`,
    {
      slug,
    }
  );
  return { props: { blocks } };
}

export async function getStaticPaths() {
  const pages = await client.fetch(`*[_type == "page"]`);
  const paths = pages.map(({ slug: { current } }) => ({
    params: { slug: current },
  }));
  return { paths, fallback: true };
}

export default function Page({ blocks }) {
  return <PageTemplate blocks={blocks} />;
}
