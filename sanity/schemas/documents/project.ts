const project = {
  name: "project",
  title: "Projects",
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
      name: "index",
      title: "Index",
      type: "number",
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: "Year",
      name: "year",
      type: "date",
      options: {
        dateFormat: "YYYY",
        calendarTodayLabel: "Today",
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        slugify: (input: string) =>
          input
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, ""),
        validation: (Rule: { required: () => any }) => Rule.required(),
      },
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "projectImage",
        },
      ],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "cover",
      title: "Cover image",
      type: "mainImage",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "hover",
      title: "Hover image",
      type: "mainImage",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "hoverColor",
      title: "Hover color",
      description: "Example: #000000 or rgba(255,255,255,1)",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      type: "array",
      name: "summary",
      title: "Summary",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "left",
              title: "Left column",
              type: "string",
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: "right",
              title: "Right column",
              type: "array",
              of: [
                {
                  type: "block",
                  lists: [],
                  styles: [],
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
          ],
        },
      ],
    },
    {
      name: "description",
      title: "Description",
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
  ],
  orderings: [
    {
      title: "Index asc",
      name: "indexAsc",
      by: [{ field: "index", direction: "asc" }],
    },
    {
      title: "Index desc",
      name: "indexDesc",
      by: [{ field: "index", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      index: "index",
    },
    prepare({ title, index }: { title: string; index: number }) {
      return {
        title: ("00" + index).slice(-3) + " / " + title,
      };
    },
  },
};

export default project;
