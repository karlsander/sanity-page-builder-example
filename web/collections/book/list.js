/** @jsx jsx */
import { jsx } from "@theme-ui/core";

export default function BookList({ slug, title, author, excerpt }) {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{author}</h2>
      <p>{excerpt}</p>
    </div>
  );
}
