import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: "q02b1i10",
  dataset: "production",
  useCdn: false,
});

export { client };
