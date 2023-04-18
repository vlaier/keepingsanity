import { createClient, groq } from 'next-sanity';
import config from '@/sanity.config';
const client = createClient(config);
export async function getProjects() {
  return client.fetch(groq`*[_type == "project"]{
    _id,
    _createdAt,
    _name,
    "slug":slug.current,
    "image":image.asset->url,
    url,
    content

  }`);
}
