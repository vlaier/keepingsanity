import { PortableTextBlock } from 'sanity';

export type ProjectType = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
  content: PortableTextBlock[];
};
