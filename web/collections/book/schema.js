export default {
  name: "book",
  title: "Book",
  type: "document",
  fields: [
    { name: "slug", title: "slug", type: "slug" },
    { name: "title", title: "title", type: "string" },
    { name: "author", title: "author", type: "string" },
    { name: "excerpt", title: "excerpt", type: "string" },
  ],
};
