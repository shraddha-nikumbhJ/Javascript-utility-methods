import { skills } from "@/data/skills";
import SectionHeading from "../ui/SectionHeading";

const categories = [
  {
    title: "Frontend",
    items: skills.frontend,
  },
  {
    title: "State Management",
    items: skills.stateManagement,
  },
  {
    title: "API & Data",
    items: skills.api,
  },
  {
    title: "Testing & Quality",
    items: skills.testing,
  },
  {
    title: "Tools & DevOps",
    items: skills.tools,
  },
  {
    title: "Cloud",
    items: skills.cloud,
  },
   {
    title: "CMS",
    items: skills.cms,
  },
  {
    title: "Leadership & Collaboration",
    items: skills.leadership,
  }
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 bg-white py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        <SectionHeading
          eyebrow="Skills"
          title="My Technical Toolbox"
          description="Technologies and tools I use to build modern, scalable frontend applications."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl"
            >
              <h3 className="text-xl font-bold text-slate-900">
                {category.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}