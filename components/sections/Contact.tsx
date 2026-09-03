import {
  FiMail,
  FiGithub,
} from "react-icons/fi";

import {
  FaLinkedinIn,
} from "react-icons/fa";

import ContactForm from "../ContactForm";
import SectionHeading from "../ui/SectionHeading";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-slate-50 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        <SectionHeading
          eyebrow="Contact"
          title="Let's Work Together"
          description="Interested in working together or have a frontend opportunity? I'd love to hear from you."
        />

        <div className="grid gap-12 lg:grid-cols-2">

          <div>
            <h3 className="text-3xl font-bold text-slate-900">
              Have an opportunity?
            </h3>

            <p className="mt-5 max-w-lg leading-8 text-slate-600">
              I'm currently open to senior frontend engineering
              opportunities, particularly remote positions where I
              can contribute to scalable React applications.
            </p>

            <div className="mt-8 space-y-4">

              <a
                href="mailto:nikumbhshraddha05@gmail.com"
                className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm"
              >
                <FiMail className="text-indigo-600" />
                <span>nikumbhshraddha05@gmail.com</span>
              </a>

              <a
                href="https://linkedin.com/in/shraddha-nikumbh-73272aa1"
                target="_blank"
                className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm"
              >
                <FaLinkedinIn className="text-indigo-600" />
                <span>linkedin.com/in/shraddha-nikumbh-73272aa1</span>
              </a>

              <a
                href="https://github.com/shraddha-nikumbhJ/javascript-react-workspace"
                target="_blank"
                className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm"
              >
                <FiGithub className="text-indigo-600" />
                <span>https://github.com/shraddha-nikumbhJ/javascript-react-workspace</span>
              </a>

            </div>
          </div>

          <div className="rounded-3xl bg-white p-7 shadow-xl shadow-slate-200/50 sm:p-10">
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  );
}