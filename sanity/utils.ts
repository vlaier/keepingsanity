import { ProjectType } from '@/types/Project';
import { SectionType } from '@/types/Section';
import { createClient, groq } from 'next-sanity';
const projectId = process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID;
const config = {
  projectId,
  dataset: 'production',
  title: 'Keeping Sanity',
  apiVersion: '2023-04-18',
  useCdn: true,
};
const client = createClient(config);
export async function getProjects(): Promise<ProjectType[]> {
  return client.fetch(groq`*[_type == "project"]{
    _id,
    _createdAt,
    name,
    "slug":slug.current,
    "image":image.asset->url,
    liveUrl,
    githubUrl,
    content

  }`);
}
export async function getProjectBySlug(slug: string): Promise<ProjectType> {
  return client.fetch(groq`*[_type == "project" && slug.current == "${slug}"][0]{
    _id,
    _createdAt,
    name,
    "slug":slug.current,
    "image":image.asset->url,
    liveUrl,
    githubUrl,
    content
  }`);
}
export async function getSectionBySlug(slug: string): Promise<SectionType> {
  return client.fetch(groq`*[_type == "section" && slug.current == "${slug}"][0]{
    _id,
    _createdAt,
    title,
    "slug":slug.current,
    content
  }`);
}
