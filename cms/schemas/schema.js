import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import page from "./page";
import { schemas } from "web/sections/schemas";

export default createSchema({
  name: "default",
  types: schemaTypes.concat(Object.values(schemas).flat()).concat([page]),
});
