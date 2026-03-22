import Hero from "@/features/hero/Hero";
import { Projects } from "@/features/projects/Projects";
import { getStaticProjects } from "./actions/projectActions";
import {Suspense} from "react";
import LenisWrapper from "@/features/lenisWrapper/LenisWrapper";
import Experience from "@/features/experience/Experience";

export const revalidate = 3600; // re-fetch from Firestore at most once per hour

export default async function Home() {
    const projects = await getStaticProjects();

  return (
      <main className="flex w-full flex-col justify-between sm:items-start">
          <LenisWrapper>
              <Hero id="hero" className="w-full h-screen" />
              {/*<Experience id="experience" className="w-full " />*/}
              <div className="h-full"></div>
              {/*<Experience />*/}
              <Suspense fallback={<div>... Loading</div>}>
                  <Projects projects={projects} className=" w-full drop-shadow-2xl z-100 " />
              </Suspense>
          </LenisWrapper>
        
      </main>
  );
}
