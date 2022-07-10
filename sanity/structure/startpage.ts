import S from "@sanity/desk-tool/structure-builder";

export const Startpage = S.listItem()
  .title("Startpage")
  .child(S.editor().schemaType("startpage").documentId("startpage"));
