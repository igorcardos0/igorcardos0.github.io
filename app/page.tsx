import { Sidebar } from "@/components/layout/sidebar"
import { HeroSection } from "@/components/sections/hero-section"
import dynamic from "next/dynamic"

// Lazy load seções não críticas para melhorar o First Contentful Paint
const AboutSection = dynamic(() => import("@/components/sections/about-section").then(mod => ({ default: mod.AboutSection })), {
  loading: () => <div className="min-h-screen" />,
})
const ProjectsSection = dynamic(() => import("@/components/sections/projects-section").then(mod => ({ default: mod.ProjectsSection })), {
  loading: () => <div className="min-h-screen" />,
})
const ContactSection = dynamic(() => import("@/components/sections/contact-section").then(mod => ({ default: mod.ContactSection })), {
  loading: () => <div className="min-h-screen" />,
})

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
