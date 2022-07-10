const projectImage = {
  title: "Image",
  name: "projectImage",
  type: "image",
  fields: [
    {
      name: "alt",
      title: "Alternative text",
      type: "string",
      description: "Important for SEO and accessiblity.",
      validation: (Rule: any) =>
        Rule.error("You have to fill out the alternative text.").required(),
      options: {
        isHighlighted: true,
      },
    },
    {
      name: "isMobilePreview",
      title: "Startpage mobile",
      type: "boolean",
      initialValue: false,
      options: {
        isHighlighted: true,
      },
    },
    {
      name: "isDesktopPreview",
      title: "Startpage desktop",
      type: "boolean",
      initialValue: false,
      options: {
        isHighlighted: true,
      },
    },
  ],
  preview: {
    select: {
      title: "alt",
      isMobile: "isMobilePreview",
      isDesktop: "isDesktopPreview",
      media: "asset",
    },
    prepare({ media, title, isMobile, isDesktop }) {
      return {
        title:
          (isMobile ? "#Mobile / " : "") +
          (isDesktop ? "#Desktop / " : "") +
          title,
        media,
      };
    },
  },
};

export default projectImage;
