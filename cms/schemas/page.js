import { schemas } from "web/sections/schemas";

export default {
  name: "page",
  title: "page",
  type: "document",
  fields: [
    { name: "slug", title: "slug", type: "slug" },
    {
      name: "blocks",
      title: "blocks",
      type: "array",
      of: Object.keys(schemas).map((sectionName) => ({ type: sectionName })),
    },
  ],
};
