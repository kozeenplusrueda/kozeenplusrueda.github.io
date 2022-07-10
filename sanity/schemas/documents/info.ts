const info = {
  name: "info",
  title: "Info page",
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
      name: "title",
      title: "Page title",
      type: "array",
      of: [
        {
          type: "block",
          lists: [],
          styles: [],
          marks: {
            decorators: [],
            annotations: [],
          },
        },
      ],
      validation: (Rule: any) => Rule.required(),
    },
    {
      type: "array",
      name: "stanislav",
      title: "Stanislav Kozeen",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "text",
              title: "Place of study",
              type: "string",
            },
            {
              name: "year",
              title: "Year",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      type: "array",
      name: "marcelo",
      title: "Marcelo Rueda",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "text",
              title: "Place of study",
              type: "string",
            },
            {
              name: "year",
              title: "Year",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "text",
      title: "Text",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
          lists: [],
          styles: [],
          name: "block",
          marks: {
            decorators: [],
            annotations: [
              {
                title: "URL",
                name: "link",
                type: "object",
                fields: [
                  {
                    title: "URL",
                    name: "href",
                    type: "url",
                    validation: (Rule: any) =>
                      Rule.uri({
                        allowRelative: true,
                        scheme: ["https", "http", "mailto", "tel"],
                      }),
                  },
                  {
                    title: "Open in new tab",
                    name: "blank",
                    type: "boolean",
                  },
                ],
              },
            ],
          },
        },
      ],
      validation: (Rule: any) => Rule.required(),
    },
    // {
    //   name: "text",
    //   title: "Info text",
    //   type: "array",
    //   of: [
    //     {
    //       type: "block",
    //       lists: [],
    //       styles: [],
    //       marks: {
    //         decorators: [],
    //         annotations: [],
    //       },
    //     },
    //   ],
    //   validation: (Rule: any) => Rule.required(),
    // },
  ],
  preview: {
    prepare() {
      return {
        title: "Info content",
      };
    },
  },
};

export default info;
