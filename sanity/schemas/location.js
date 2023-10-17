import { defineField, defineType } from "sanity";

export default defineType({
  name: "location",
  title: "Location",
  type: "document",
  fields: [
    defineField({
      name: "location",
      title: "Location",
      type: "string",
    }),
    defineField({
      name: "text",
      title: "Location Detail",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Location image",
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
      name: "description",
      title: "Description",
      type: "string",
    }),
  ],
});
