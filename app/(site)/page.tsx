import Badge from '@/components/ui/Badge';
import { getProjects, getSectionBySlug, getSocials } from '@/sanity/utils';
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
    <section className="mx-auto rounded-xl shadow shadow-blue-300/60 flex flex-col gap-4 px-4 py-6">
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
      className="rounded-lg border border-gray-600/50 flex flex-col items-center justify-center p-4 hover:shadow hover:border-transparent hover:shadow-blue-500 transition duration-400 ease-in-out"
    >
      <div className="relative w-52 h-52 mb-2 mx-auto">
        <Image
          src={project.image}
          alt={project.name}
          width={1600}
          height={900}
          className="rounded-md object-cover object-center"
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
            <a href={project.githubUrl} className="cursor-pointer underline">
              Github
            </a>
          )}
        </div>
      </div>
    </div>
  ));
  const socials = await getSocials();
  const socialsElement = socials.map((social) => {
    return (
      <a
        key={social._id}
        href={social.link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex gap-3 text-xl text-gray-400 hover:text-gray-600 transition duration-300 ease-in-out"
      >
        <div className="bg-gray-300 rounded-full p-1.5">
          <img src={social.image} alt={social.name} className="w-4 " />
        </div>

        <span className="font-bold">{social.text}</span>
      </a>
    );
  });

  return (
    <>
      <div className="text-center ">
        <h1 className="text-7xl font-bold mt-20 mb-4">Piotr Zieliński</h1>
        <div className="w-fit flex flex-col md:flex-row gap-8 md:mx-auto">
          {socialsElement}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14 mx-auto">
        {/* @ts-expect-error Server Component */}
        <Section slug="about-me" />
        {/* @ts-expect-error Server Component */}
        <Section slug="skills" />
      </div>
      <div className="mt-14">
        <h2 className="text-3xl font-semibold mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {projectsElement}
        </div>
      </div>
    </>
  );
}
