import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import page from "./page";

const sectionContext = require.context(
  "web/sections",
  false,
  /\.(js|jsx|ts|tsx)$/
);

const sectionSchemas = sectionContext
  .keys()
  .map((filename) => sectionContext(filename).schema);

export default createSchema({
  name: "default",
  types: schemaTypes.concat(sectionSchemas.flat()).concat([page]),
});
