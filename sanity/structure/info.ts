import S from "@sanity/desk-tool/structure-builder";

export const Info = S.listItem()
  .title("Info")
  .child(S.editor().schemaType("info").documentId("info"));
