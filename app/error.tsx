"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-5 text-center">
      <h1 className="text-4xl font-bold">
        Something went wrong
      </h1>

      <p className="mt-4 text-slate-600">
        We couldn't load this page.
      </p>

      <button
        onClick={() => reset()}
        className="mt-6 rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white"
      >
        Try Again
      </button>
    </div>
  );
}