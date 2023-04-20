import Badge from '@/components/ui/Badge';
import { getProjects, getSectionBySlug } from '@/sanity/utils';
import { PortableText, PortableTextComponents } from '@portabletext/react';
import Image from 'next/image';

const Section = async ({ slug }: { slug: string }) => {
  const sectionData = await getSectionBySlug(slug);
  const components: PortableTextComponents = {
    list: {
      bullet: ({ children }) => (
        <ul className="flex flex-wrap gap-4 w-3/4">{children}</ul>
      ),
    },
    listItem: {
      bullet: ({ children }) => <Badge>{children}</Badge>,
    },
    block: {
      normal: ({ children }) => (
        <p className="text-gray-400 font-semibold text-lg leading-7 mb-4">
          {children}
        </p>
      ),
    },
  };

  return (
    <section className="rounded-xl shadow shadow-blue-300/60 flex flex-col gap-4 px-4 py-6">
      <h2 className="text-3xl font-semibold">{sectionData.title}</h2>
      <PortableText value={sectionData.content} components={components} />
    </section>
  );
};

export default async function Home() {
  const projects = await getProjects();

  const projectsElement = projects.map((project) => (
    <div
      key={project._id}
      rel="noopener noreferrer" // Add security attributes to the link
      className="rounded-lg border border-gray-600/50 flex flex-col items-center justify-center p-4 hover:shadow-md hover:border-blue-500 transition duration-300 ease-in-out"
    >
      <div className="relative w-52 h-52 mb-2">
        <Image
          src={project.image}
          alt={project.name}
          width={160}
          height={90}
          className="rounded-md"
        />
      </div>
      <div className="h-full">
        <h2 className="text-xl font-semibold mb-2 leading-6 text-center">
          {project.name}
        </h2>
        <div className="text-gray-500 font-bold text-sm">
          <PortableText value={project.content} />
        </div>
        <div className="flex gap-4">
          {project.liveUrl && (
            <a href={project.liveUrl} className="cursor-pointer underline">
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a href={project.liveUrl} className="cursor-pointer underline">
              Github
            </a>
          )}
        </div>
      </div>
    </div>
  ));

  return (
    <div className="">
      <h1 className="text-center text-7xl font-bold py-20">Piotr Zieliński</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* @ts-expect-error Server Component */}
        <Section slug="about-me" />
        {/* @ts-expect-error Server Component */}
        <Section slug="skills" />
      </div>
      <div>
        <h2 className="text-3xl font-semibold mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {projectsElement}
        </div>
      </div>
    </div>
  );
}
