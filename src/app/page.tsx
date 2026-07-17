import Hero from "@/components/sections/Hero";
import GbpAuditWidget from "@/components/sections/GbpAuditWidget";
import Services from "@/components/sections/Services";
import Industries from "@/components/sections/Industries";
import Process from "@/components/sections/Process";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CaseStudies from "@/components/sections/CaseStudies";
import Technologies from "@/components/sections/Technologies";
import Faq from "@/components/sections/Faq";
import ContactCta from "@/components/sections/ContactCta";

export default function Home() {
  return (
    <>
      <Hero />
      <GbpAuditWidget />
      <Services />
      <Industries />
      <Process />
      <WhyChooseUs />
      <CaseStudies />
      <Technologies />
      <Faq />
      <ContactCta />
    </>
  );
}
