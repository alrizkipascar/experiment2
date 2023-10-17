import { groq } from "next-sanity";
import { client } from "./sanity";

export async function getDashboardProject() {
  return client.fetch(
    groq`*[_type == "project"][0..1]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      "mainImage": mainImage.asset->url,
      tags[]->{...,title},
      "imagesGallery": imagesGallery[] {
        'url':asset->url,
        },
      body
    }`
  );
}
export async function getDashboardBlog() {
  return client.fetch(
    groq`*[_type == "blog"][0]{
      _id,
      _createdAt,
      title,
      body,
      "slug": slug.current,
      "imageUrl": mainImage.asset->url,
    }`
  );
}

export async function getProjects() {
  return client.fetch(
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      publishedAt,
      title,
      "slug": slug.current,
      "mainImage": mainImage.asset->url,
      tags[]->{...,title},
      "imagesGallery": imagesGallery[] {
        'url':asset->url,
        },
      body
    }`
  );
}
// slug,
// mainImage,
// imagesGallery,
// publishedAt,
// body,
export async function getProject(slug) {
  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      publishedAt,
      title,
      "slug": slug.current,
      "mainImage": mainImage.asset->url,
      tags[]->{...,title},
      "imagesGallery": imagesGallery[] {
        'url':asset->url,
        },
      body
    }`,
    { slug }
  );
}

export async function getBlogs() {
  return client.fetch(
    groq`*[_type == "blog"]{
      _id,
      _createdAt,
      title,
      body,
      publishedAt,
      categories[]->{...,title},
      "slug": slug.current,
      "imageUrl": mainImage.asset->url,
      "mainImageAlt": mainImage.alt,
    }`
  );
}

export async function getBlog(slug) {
  return client.fetch(
    groq`*[_type == "blog" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      publishedAt,
      categories[]->{...,title},
      "slug": slug.current,
      "imageUrl": mainImage.asset->url,
      "mainImageAlt": mainImage.alt,
      body,
      "parallaxImage": parallaxImage.asset->url,
      "parallaxImageAlt": parallaxImage.alt,
      "parallaxImageText": parallaxImage.text,
      bodyParallax
    }`,
    { slug }
  );
}

export async function getLocation() {
  return client.fetch(
    groq`*[_type == "location"]{
      _id,
      _createdAt,
      location,
      text,
      description,
      "src": image.asset->url,
      "alt": image.alt,
    }`
  );
}

export async function getAboutContent() {
  return client.fetch(
    groq`*[_type == "about"][0]{
      _id,
      _createdAt,
      title,
      explanation,
      "image": image.asset->url,
      "alt": image.alt,
      contenTitle1,
      content1,
      contenTitle2,
      content2,
      contenTitle3,
      content3,
      contenTitle4,
      content4,
    }`
  );
}
