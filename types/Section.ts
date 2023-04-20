import { PortableTextBlock } from 'sanity';

export type SectionType = {
  _id: string;
  _createdAt: Date;
  title: string;
  slug: string;
  content: PortableTextBlock[];
};
