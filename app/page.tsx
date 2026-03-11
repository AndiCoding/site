import Hero from "@/features/hero/Hero";
import Experience from "@/features/experience/Experience";
import Projects from "@/features/projects/Projects";
import Sidebar from "@/features/sidebar/Sidebar";

export default function Home() {
  return (
      <main className=" flex  w-full flex-col bg-soft-periwinkle-50 dark:bg-soft-periwinkle-900 justify-between sm:items-start">
        <Hero id="hero" className="w-full h-screen" />
          {/*<Experience id="experience" className="w-full " />*/}
          <Projects id="projects" className=" w-full drop-shadow-2xl z-100 " />
          <Sidebar />
      </main>
  );
}
