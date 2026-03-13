import Hero from "@/features/hero/Hero";
import { Projects } from "@/features/projects/Projects";
import Sidebar from "@/features/sidebar/Sidebar";
import { getProjects } from "./actions/projectActions";
import { Suspense } from "react";



export default async function Home() {
    const projects = await getProjects();
  return (
      <main className=" flex  w-full flex-col bg-soft-periwinkle-50 dark:bg-soft-periwinkle-900 justify-between sm:items-start">
        <Hero id="hero" className="w-full h-screen" />
          {/*<Experience id="experience" className="w-full " />*/}
          <Suspense fallback={<div>... Loading</div>}>
              <Projects projects={projects} className=" w-full drop-shadow-2xl z-100 " />
          </Suspense>
          <Sidebar />
      </main>
  );
}
