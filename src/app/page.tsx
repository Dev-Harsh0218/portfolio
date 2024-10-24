import About from "@/components/about";
import Intro from "@/components/intro";
import ProjectSection from "@/components/projects";
import Section_divider from "@/components/section_divider";

export default function Home() {
  return <main className="flex flex-col items-center px-4">
    <Intro/>
    <Section_divider/>
    <About/>
    <ProjectSection/>
  </main>;
}
