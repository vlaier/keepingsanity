import { Project } from '@/types/Project';
import { createClient, groq } from 'next-sanity';
const projectId = process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID;
const config = {
  projectId,
  dataset: 'production',
  title: 'Keeping Sanity',
  apiVersion: '2023-04-18',
};
const client = createClient(config);
export async function getProjects(): Promise<Project[]> {
  return client.fetch(groq`*[_type == "project"]{
    _id,
    _createdAt,
    name,
    "slug":slug.current,
    "image":image.asset->url,
    url,
    content

  }`);
}
