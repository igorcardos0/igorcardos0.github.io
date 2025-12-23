import { Sidebar } from "@/components/layout/sidebar"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { ContactSection } from "@/components/sections/contact-section"

export default function Home() {
  return (
    <div className="flex min-h-screen relative">
      <Sidebar />
      <main className="flex-1 ml-0 md:ml-20 relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  )
}
