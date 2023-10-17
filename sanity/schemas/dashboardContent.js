import { defineType } from "sanity";

export default defineType({
  name: "dashboardcontent",
  title: "Dashboard Content",
  type: "document",
  fields: [
    {
      name: "id",
      title: "Id",
      type: "string",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    // {
    //   title: "Video file",
    //   name: "video",
    //   type: "mux.video",
    // },
  ],
});
