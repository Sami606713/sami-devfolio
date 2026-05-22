import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { ServiceTeaser } from "@/components/home/ServiceTeaser";
import { StartupHighlight } from "@/components/home/StartupHighlight";
import { Testimonials } from "@/components/home/Testimonials";
import { CTAStrip } from "@/components/home/CTAStrip";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <FeaturedProjects />
      <ServiceTeaser />
      <StartupHighlight />
      <Testimonials />
      <CTAStrip />
    </>
  );
}
