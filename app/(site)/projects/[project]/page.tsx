import { getProjectBySlug } from '@/sanity/utils';
import { notFound } from 'next/navigation';
type Props = {
  params: {
    project: string;
  };
};
export default async function ProjectPage({ params }: Props) {
  const slug = params.project;
  const project = await getProjectBySlug(slug);
  if (!project) {
    notFound();
  }
  return <div>{JSON.stringify(project)}</div>;
}
