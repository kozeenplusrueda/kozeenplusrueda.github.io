const startpage = {
  name: "startpage",
  title: "Startpage",
  type: "document",
  fieldsets: [
    {
      name: "meta",
      title: "Meta infomation",
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
  fields: [
    {
      type: "metaFields",
      name: "meta",
      fieldset: "meta",
    },
    {
      name: "projects",
      title: "Projects",
      type: "array",
      of: [{ type: "reference", to: { type: "project" } }],
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Startpage content",
      };
    },
  },
};

export default startpage;
