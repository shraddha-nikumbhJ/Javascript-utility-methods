import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Shraddha Nikumbh | Senior Frontend Engineer",
    template: "%s | Shraddha Nikumbh",
  },
  description:
    "Senior Frontend Engineer specializing in React.js, Next.js, TypeScript, JavaScript and scalable web applications.",
  keywords: [
    "React Developer",
    "Senior Frontend Engineer",
    "React.js",
    "TypeScript",
    "JavaScript",
    "Next.js",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}