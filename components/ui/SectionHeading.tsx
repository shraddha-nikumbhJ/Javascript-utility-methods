type Props = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: Props) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">
      <span className="inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-xs font-bold uppercase tracking-widest text-indigo-600">
        {eyebrow}
      </span>

      <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-lg leading-8 text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}