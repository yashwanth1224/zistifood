import { AppFeatures } from "@/components/sections/AppFeatures";
import { DownloadBanner } from "@/components/sections/DownloadBanner";
import { Ecosystem } from "@/components/sections/Ecosystem";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { ValueProp } from "@/components/sections/ValueProp";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <ValueProp />
        <AppFeatures />
        <Ecosystem />
        <DownloadBanner />
      </main>
      <Footer />
    </>
  );
}
