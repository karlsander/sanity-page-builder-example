/** @jsx jsx */
import { jsx } from "@theme-ui/core";

export const schema = {
  name: "Heading",
  title: "Heading",
  type: "object",
  fields: [{ name: "heading", title: "heading", type: "string" }],
};

export default function Heading({ heading }) {
  return (
    <div>
      <h1>{heading}</h1>
    </div>
  );
}
