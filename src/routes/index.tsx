import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/site/HeroSection";
import { MarqueeStrip } from "@/components/site/MarqueeStrip";
import { WhyUs } from "@/components/site/WhyUs";
import { StatCounter } from "@/components/site/StatCounter";
import { Pricing } from "@/components/site/Pricing";
import { BMIGauge } from "@/components/site/BMIGauge";
import { ParallaxGallery } from "@/components/site/ParallaxGallery";
import { Testimonials } from "@/components/site/Testimonials";
import { LocationMap } from "@/components/site/LocationMap";
import { InquiryForm } from "@/components/site/InquiryForm";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      <div className="-mt-20">
        <HeroSection />
      </div>
      <MarqueeStrip />
      <WhyUs />
      <StatCounter />
      <Pricing />
      <BMIGauge />
      <ParallaxGallery />
      <Testimonials />
      <LocationMap />
      <InquiryForm />
    </>
  );
}
