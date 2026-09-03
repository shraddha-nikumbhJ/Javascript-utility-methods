import { experience } from "@/data/experience";
import SectionHeading from "../ui/SectionHeading";

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 bg-white py-24 lg:py-32"
    >
      <div className="mx-auto max-w-5xl px-5 lg:px-8">

        <SectionHeading
          eyebrow="Experience"
          title="My Professional Journey"
          description="A decade of building enterprise-grade web applications."
        />

        <div className="relative border-l-2 border-indigo-100 pl-8">

          {experience.map((item) => (
            <div
              key={`${item.company}-${item.role}`}
              className="relative mb-12 last:mb-0"
            >
              <div className="absolute -left-[43px] top-1 h-5 w-5 rounded-full border-4 border-white bg-indigo-600 shadow" />

              <p className="text-sm font-semibold text-indigo-600">
                {item.period}
              </p>

              <h3 className="mt-2 text-2xl font-bold text-slate-900">
                {item.role}
              </h3>

              <p className="mt-1 font-medium text-slate-500">
                {item.company}
              </p>

              <p className="mt-5 leading-7 text-slate-600">
                {item.description}
              </p>

              <ul className="mt-5 space-y-3">
                {item.achievements && item.achievements.map((achievement) => (
                  <li
                    key={achievement}
                    className="flex gap-3 text-slate-600"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-indigo-500" />
                    {achievement}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {item.technologies && item.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-lg bg-slate-100 px-3 py-2 text-xs font-medium text-slate-600"
                  >
                    {technology}
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