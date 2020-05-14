/** @jsx jsx */
import { jsx } from "@theme-ui/core";
import { Fragment } from "react";

const sectionContext = require.context(
  "web/sections",
  false,
  /\.(js|jsx|ts|tsx)$/
);

const components = Object.fromEntries(
  sectionContext.keys().map((filename) => {
    const parts = filename.split("./")[1].split(".");
    parts.splice(-1, 1);
    const name = parts.join(".");
    const component = sectionContext(filename).default;
    return [name, component];
  })
);

function Blocks({ blocks }) {
  return (
    <Fragment>
      {blocks.map(({ _key, _type, ...props }) => {
        const Component = components[_type];
        if (Component) {
          return <Component {...props} key={_key} />;
        } else {
          console.log(`tried to render unknown section ${_type}`);
          return null;
        }
      })}
    </Fragment>
  );
}

function PageTemplate({ blocks = [] }) {
  return (
    <div sx={{ mx: "auto", maxWidth: 500, p: 4, bg: "#ffdddd" }}>
      <Blocks blocks={blocks} />
    </div>
  );
}

export { PageTemplate };
