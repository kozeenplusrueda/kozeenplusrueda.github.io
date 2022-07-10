import S from "@sanity/desk-tool/structure-builder";

export const Secret = S.listItem()
  .title("Secret")
  .child(S.editor().schemaType("secret").documentId("secret"));
