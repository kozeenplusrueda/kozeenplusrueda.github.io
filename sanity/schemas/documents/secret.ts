const secret = {
  name: "secret",
  title: "Secret page",
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
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "mainImage",
        },
      ],
      validation: (Rule: any) => Rule.required(),
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Secret content",
      };
    },
  },
};

export default secret;
