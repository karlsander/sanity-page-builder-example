/** @jsx jsx */
import { jsx } from "@theme-ui/core";

export const schema = {
  name: "Text",
  type: "object",
  fields: [{ name: "text", type: "string" }],
};

export default function Text({ text }) {
  return <div>{text}</div>;
}
