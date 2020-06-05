import sanityClient from "@sanity/client";
import config from "cms/sanity.json";

const client = sanityClient({
  projectId: config.api.projectId,
  dataset: config.api.dataset,
  useCdn: process.env.NODE_ENV !== "development",
});

export { client };
