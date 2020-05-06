/** @jsx jsx */
import { jsx } from "@theme-ui/core";
import { Fragment } from "react";
import { components } from "web/sections/components";

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
