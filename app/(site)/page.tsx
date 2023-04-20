import Badge from '@/components/ui/Badge';
import { getProjects, getSectionBySlug } from '@/sanity/utils';
import { PortableText, PortableTextComponents } from '@portabletext/react';
import Image from 'next/image';
const Section = async ({ slug }: { slug: string }) => {
  const sectionData = await getSectionBySlug(slug);
  const components: PortableTextComponents = {
    list: {
      bullet: ({ children }) => <ul className="flex gap-1">{children}</ul>,
    },
    listItem: {
      bullet: ({ children }) => <Badge>{children}</Badge>,
    },
  };

  return (
    <section>
      <h2>{sectionData.title}</h2>
      <PortableText value={sectionData.content} components={components} />
    </section>
  );
};
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
    <div className="">
      <h1 className="text-center text-7xl font-extrabold py-20">
        Piotr Zieliński
      </h1>
      <div>
        {/* @ts-expect-error Server Component */}
        <Section slug="skills" />
        {/* @ts-expect-error Server Component */}
        <Section slug="about-me" />
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
