import "@/assets/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};
export default MainLayout;
