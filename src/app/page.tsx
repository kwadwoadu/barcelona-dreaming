import { Hero } from "@/components/home/Hero";
import { TrustBadges } from "@/components/home/TrustBadges";
import { GuideCategories } from "@/components/home/GuideCategories";
import { PremiumPreview } from "@/components/home/PremiumPreview";
import { Testimonials } from "@/components/home/Testimonials";
import { AboutSnippet } from "@/components/home/AboutSnippet";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <GuideCategories />
      <PremiumPreview />
      <Testimonials />
      <AboutSnippet />
    </>
  );
}
