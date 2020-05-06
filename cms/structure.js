import S from "@sanity/desk-tool/structure-builder";
import { PagePreview } from "cms/components/PagePreview";

export default () =>
  S.list()
    .title("Page Builder")
    .items([
      S.listItem()
        .title("Pages")
        .schemaType("page")
        .child(
          S.documentTypeList("page")
            .title("Page")
            .child((documentId) =>
              S.document()
                .documentId(documentId)
                .schemaType("page")
                .views([
                  S.view.form(),
                  S.view.component(PagePreview).title("Preview"),
                ])
            )
        ),
    ]);
