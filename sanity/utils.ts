import { Project } from '@/types/Project';
import { createClient, groq } from 'next-sanity';
import { baseConfig as config } from '@/sanity.config';
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
