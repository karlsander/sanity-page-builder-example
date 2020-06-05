/** @jsx jsx */
import { jsx } from "@theme-ui/core";

export default function BookSingle({ list }) {
  return (
    <ul>
      {list.map(({ title, slug }) => (
        <li>
          <a href={slug}>{title}</a>
        </li>
      ))}
    </ul>
  );
}
