import SectionHeading from "../ui/SectionHeading";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 bg-slate-50 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        <SectionHeading
          eyebrow="About Me"
          title="The Engineer Behind the Code"
          description="Building scalable web applications with a strong focus on performance, maintainability and user experience."
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          <div className="space-y-6 text-lg leading-8 text-slate-600">
            <p>
              I am a Senior Frontend Engineer with around
              <strong className="text-slate-900">
                {" "}10 years of overall IT experience
              </strong>
              {" "}and 8.5 years of extensive experience in frontend development.
            </p>

            <p>
              My core expertise is the React ecosystem, including React.js, JavaScript, TypeScript, Redux, React Query, REST APIs, GraphQL, Accessibility, React Testing Library, Jest and modern frontend architecture.
            </p>

            <p>
              I have worked on enterprise applications across Banking, Insurance, Healthcare and E-commerce domains, contributing to scalable and high-performance applications while collaborating closely with cross-functional teams.
            </p>

            <p>
              Beyond hands-on development, I take ownership of frontend architecture, technical decisions and delivery. I enjoy mentoring developers, conducting code reviews, establishing coding best practices and helping teams build maintainable and reusable solutions.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">

            <Stat
              value="10.5"
              label="Years Experience"
            />

            <Stat
              value="8.5"
              label="Years Frontend"
            />

            <Stat
              value="React"
              label="Primary Expertise"
            />

            <Stat
              value="4"
              label="Major Domains"
            />

          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <p className="text-4xl font-extrabold text-indigo-600">
        {value}
      </p>

      <p className="mt-2 text-sm font-medium text-slate-500">
        {label}
      </p>
    </div>
  );
}