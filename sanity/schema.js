import skill from "./schemas/skill";
import experience from "./schemas/experience";

import author from "./schemas/author";

import blockContent from "./schemas/blockContent";

import category from "./schemas/category";

import post from "./schemas/post";
import DashboardContent from "./schemas/dashboardContent";
import projects from "./schemas/projects";
import projectTags from "./schemas/projectTags";
import blog from "./schemas/blog";
import location from "./schemas/location";
import about from "./schemas/about";

export const schema = {
  types: [
    about,
    author,
    blog,
    blockContent,
    category,
    DashboardContent,
    post,
    projectTags,
    skill,
    experience,
    projects,
    location,
  ],
};
