import Hero from "@/features/hero/Hero";
import Experience from "@/features/experience/Experience";
import Projects from "@/features/projects/Projects";
import Sidebar from "@/features/sidebar/Sidebar";

export default function Home() {
  return (
      <main className=" flex  w-full flex-col  justify-between  bg-gradient dark:dark-bg-gradient sm:items-start">
        <Hero id="hero" className="w-full h-screen" />
          {/*<Experience id="experience" className="w-full " />*/}
          {/*<Projects id="projects" className="w-full" />*/}
          <Sidebar />
      </main>
  );
}
