import Link from "next/link";
import Image from "next/image"
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import SectionHeading from "../ui/SectionHeading";

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 bg-slate-50 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        <SectionHeading
          eyebrow="Projects"
          title="Things I've Built"
          description="Most recent projects demonstrating my frontend architecture, React and Next.js skills."
        />

       <div className="grid gap-8 lg:grid-cols-2">
  {projects.map((project) => (
    <article
      key={project.slug}
      className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >
      {/* Project Image */}
      <div className="relative h-64 w-full overflow-hidden bg-gradient-to-br from-indigo-600 to-purple-600 sm:h-72">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

      <div className="p-8">
        <h3 className="text-2xl font-bold text-slate-900">
          {project.title}
        </h3>

        <p className="mt-4 leading-7 text-slate-600">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-600"
            >
              {tech}
            </span>
          ))}
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="mt-7 inline-flex items-center gap-2 font-semibold text-indigo-600 hover:text-indigo-700"
        >
          View Project
          <ArrowUpRight size={18} />
        </Link>
      </div>
    </article>
  ))}
</div>
      </div>
    </section>
  );
}