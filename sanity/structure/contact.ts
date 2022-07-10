import S from "@sanity/desk-tool/structure-builder";

export const Contact = S.listItem()
  .title("Contact")
  .child(S.editor().schemaType("contact").documentId("contact"));
