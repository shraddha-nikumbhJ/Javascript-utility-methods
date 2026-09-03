import { ArrowDown, ArrowRight, Download } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden pt-20"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-[10%] h-80 w-80 rounded-full bg-indigo-200/40 blur-3xl" />

        <div className="absolute right-[-5%] top-[30%] h-96 w-96 rounded-full bg-blue-200/40 blur-3xl" />

        <div className="absolute bottom-0 left-[40%] h-72 w-72 rounded-full bg-purple-200/30 blur-3xl" />
      </div>

      <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-16 px-5 py-20 lg:grid-cols-2 lg:px-8">

        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-600">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Available for opportunities / Immediate Joiner
          </div>

          <p className="mb-3 text-lg font-medium text-slate-500">
            Hello, I'm
          </p>

          <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
            Shraddha
            <span className="block bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Nikumbh
            </span>
          </h1>

          <h2 className="mt-6 text-2xl font-bold text-slate-700 sm:text-3xl">
            Senior Frontend Engineer
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            10 years of experience building scalable, performant and user-focused web applications using React.js, Next.js, JavaScript, TypeScript and modern frontend technologies.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 font-semibold text-white shadow-xl shadow-indigo-500/20 transition hover:-translate-y-1 hover:bg-indigo-700"
            >
              View Projects
              <ArrowRight size={18} />
            </a>

            <a
              href="/resume/shraddha-nikumbh-resume.pdf"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-700 transition hover:border-indigo-300 hover:text-indigo-600"
            >
              Download Resume
              <Download size={18} />
            </a>
          </div>

          <div className="mt-10 flex gap-6 text-sm text-slate-500">
            <span>React.js</span>
            <span>Next.js</span>
            <span>TypeScript</span>
            <span>JavaScript</span>
          </div>
        </div>

        <div className="relative mx-auto flex h-[400px] w-full max-w-[500px] items-center justify-center">
          <div className="absolute h-72 w-72 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 opacity-20 blur-2xl" />

          <div className="relative flex  items-center justify-center rounded-full border-8 border-white ">
            <Image
              src="/profile.jpeg"
              alt="Shraddha Jagtap"
              width={230}
              height={100}
              className="rounded-full"
            />
          </div>

          <div className="absolute right-0 top-12 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">
            <p className="text-2xl font-bold text-indigo-600">
              10+
            </p>
            <p className="text-xs text-slate-500">
              Years Experience
            </p>
          </div>

          <div className="absolute bottom-12 left-0 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">
            <p className="text-2xl font-bold text-indigo-600">
              React
            </p>
            <p className="text-xs text-slate-500">
              Frontend Specialist
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-slate-400 md:flex">
        <span>SCROLL</span>
        <ArrowDown size={16} />
      </div>
    </section>
  );
}