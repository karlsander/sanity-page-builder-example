const sectionContext = require.context(
  "web/sections",
  false,
  /\.(js|jsx|ts|tsx)$/
);

const sectionTypes = sectionContext.keys().map((filename) => {
  const parts = filename.split("./")[1].split(".");
  parts.splice(-1, 1);
  const name = parts.join(".");
  return { type: name };
});

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
      of: sectionTypes,
    },
  ],
};
