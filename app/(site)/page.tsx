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
    block: {
      normal: ({ children }) => <p className="text-lg">{children}</p>,
    },
  };

  return (
    <section className="rounded-xl border border-gray-600/80 flex flex-col gap-2 max-w-xl">
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
      className="rounded-lg border border-gray-600/50 flex w-fit"
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* @ts-expect-error Server Component */}
        <Section slug="about-me" />
        {/* @ts-expect-error Server Component */}
        <Section slug="skills" />
      </div>
      <div>
        <h2>My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:gird-cols-3 xl:gird-cols-4">
          {projectsElement}
        </div>
      </div>
    </div>
  );
}
