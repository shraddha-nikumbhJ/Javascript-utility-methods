import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/data/projects";
import Link from "next/link"

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 px-5 py-32">
      <div className="mx-auto max-w-5xl">

        <div className="rounded-3xl bg-gradient-to-br from-indigo-600 to-purple-600 p-10 text-white">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-100">
            Project
          </p>

          <h1 className="mt-4 text-4xl font-bold sm:text-6xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-indigo-100">
            {project.description}
          </p>
        </div>

        <div className="mt-10 rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold">
            Technologies
          </h2>

          <div className="mt-5 flex flex-wrap gap-3">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-[25px]">
          <Link
            href="/#projects"
            className="mt-7 rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white"
          >
            Back To Projects
          </Link>
        </div>
        

      </div>
    </main>
  );
}