import { getProjects } from '@/sanity/utils';
export default async function Home() {
  const projects = await getProjects();
  const projectElements = projects.map((project) => (
    <div key={project._id} className="bg-blue-200 w-24 h-24">
      <h2>{project.name}</h2>
    </div>
  ));
  return <div className="bg-red-500 w-96 h-96">{projectElements}</div>;
}
