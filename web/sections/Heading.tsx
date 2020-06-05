/** @jsx jsx */
import { jsx } from "@theme-ui/core";

export const schema = {
  name: "Heading",
  type: "object",
  fields: [{ name: "heading", type: "string" }],
};

const types = {
  string: ({ type: "string" } as unknown) as String,
  option: function option<T>(options: T) {
    return ({ type: "array", of: options } as unknown) as keyof T;
  },
};

function createSectionSchema<T>(fields: T): T {
  return ({
    name: "Heading",
    type: "object",
    fields: [
      Object.keys(fields).map((fieldName) => ({
        name: fieldName,
        title: fieldName,
        ...fields[fieldName],
      })),
    ],
  } as unknown) as T;
}

const schema2 = createSectionSchema({
  heading: types.string,
});

function createSection<S>({
  schema,
  component,
}: {
  schema: S;
  component: React.FC<S>;
}) {
  return {
    schema: createSectionSchema(schema),
    component,
  };
}

const { schema: schema3, component } = createSection({
  schema: {
    heading: types.string,
    levels: types.option({ "1": true, "2": false, "3": false }),
  },
  component: ({ heading, levels }) => {
    return (
      <div>
        <h1>{heading}</h1>
      </div>
    );
  },
});

export default function Heading({ heading }: typeof schema2) {
  return (
    <div>
      <h1>{heading}</h1>
    </div>
  );
}
