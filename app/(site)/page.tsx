import { getProjects } from '@/sanity/utils';
import Image from 'next/image';
export default async function Home() {
  const projects = await getProjects();
  const projectsElement = projects.map((project) => (
    <div
      key={project._id}
      className="rounded-lg border border-gray-500 flex w-fit"
    >
      <h2>{project.name}</h2>
      <Image
        src={project.image}
        alt={project.name}
        width={250}
        height={250}
        className="object-fit"
      />
    </div>
  ));
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-center text-7xl font-extrabold py-20">
        Piotr{' '}
        <span className="bg-gradient-to-r from-orange-400 to-purple-600 bg-clip-text text-transparent">
          Zieliński
        </span>
      </h1>
      <div>
        <h2>About me</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
          quibusdam voluptatem tempora accusantium vitae ullam aliquid tempore
          eveniet libero voluptatibus.
        </p>
      </div>
      <div>
        <h2>My Projects</h2>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:gird-cols-3 xl:gird-cols-4">
          {projectsElement}
        </div>
      </div>
    </div>
  );
}
