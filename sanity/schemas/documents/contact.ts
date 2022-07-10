const contact = {
  name: "contact",
  title: "Contact page",
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
      name: "instagram",
      title: "Instagram",
      type: "url",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "mail",
      title: "Mail",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "phone",
      title: "Phone",
      description: "Example: 79959218268",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Contact content",
      };
    },
  },
};

export default contact;
