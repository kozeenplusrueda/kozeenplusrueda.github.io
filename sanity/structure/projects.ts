import S from "@sanity/desk-tool/structure-builder";

export const Projects = S.listItem()
  .title("Projects")
  .child(
    S.documentTypeList("project")
      .title("Projects")
      .filter("_type == $type")
      .params({ type: "project" })
  );
