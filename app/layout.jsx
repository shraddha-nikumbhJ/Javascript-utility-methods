import "@/assets/styles/globals.css";

export const metadata = {
  title: "property pulse",
  keywords: "real estate, property, housing, market trends, investment",
  description:
    "Stay ahead in the real estate market with Property Pulse. Get the latest insights, trends, and analysis on housing, property investments, and market dynamics. Your go-to source for all things real estate.",
};
const MainLayout = ({children}) => {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};
export default MainLayout;
