import { defineField, defineType } from "sanity";

export default defineType({
  name: "about",
  title: "About",
  type: "document",
  fields: [
    defineField({
      name: "image",
      title: "Main Page Image Card",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          title: "Alternative Text",
          name: "alt",
          type: "string",
        },
      ],
    }),
    defineField({
      name: "title",
      title: "Explanation Title",
      type: "string",
    }),
    defineField({
      name: "explanation",
      title: "Explanation",
      type: "string",
    }),
    defineField({
      name: "contenTitle1",
      title: "Content Title 1",
      type: "string",
    }),
    defineField({
      name: "content1",
      title: "Content Text 1",
      type: "string",
    }),

    defineField({
      name: "contenTitle2",
      title: "Content Title 2",
      type: "string",
    }),
    defineField({
      name: "content2",
      title: "Content Text 2",
      type: "string",
    }),
    defineField({
      name: "contenTitle3",
      title: "Content Title 3",
      type: "string",
    }),
    defineField({
      name: "content3",
      title: "Content Text 3",
      type: "string",
    }),
    defineField({
      name: "contenTitle4",
      title: "Content Title 4",
      type: "string",
    }),
    defineField({
      name: "content4",
      title: "Content Text 4",
      type: "string",
    }),
  ],

  preview: {
    select: {
      title: "title",
      // author: "author.name",
      media: "mainImage",
    },
    // prepare(selection) {
    //   const { author } = selection;
    //   return { ...selection, subtitle: author && `by ${author}` };
    // },
  },
});
