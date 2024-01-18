import Navigation from "@/app/components/Navigation/page";
import HeroTop from "@/app/components/Herotop/page";
import Cta from "@/app/components/Cta/page";
import Features from "@/app/components/Features/page";
import Footer from "@/app/components/Footer/page";

export default function page() {
  return (
    <>
      <Navigation />
      <div className="max-w-6xl h-full m-auto">
        <HeroTop />
        <Cta />
        <Features />
      </div>

      <Footer />
    </>
  );
}
