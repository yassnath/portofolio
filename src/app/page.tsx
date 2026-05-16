import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { AboutSection } from "@/components/sections/about";
import { CertificationsSection } from "@/components/sections/certifications";
import { ContactSection } from "@/components/sections/contact";
import { ExperienceSection } from "@/components/sections/experience";
import { HeroSection } from "@/components/sections/hero";
import { ProjectsSection } from "@/components/sections/projects";
import { SkillsSection } from "@/components/sections/skills";
import { SpaceBackground } from "@/components/space-background";

export default function Home() {
  return (
    <>
      <SpaceBackground />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
