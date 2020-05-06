import React from "react";
import { PageTemplate } from "web/components/PageTemplate";

function PagePreview({
  document: {
    displayed: { blocks },
  },
}) {
  return <PageTemplate blocks={blocks} />;
}

export { PagePreview };
