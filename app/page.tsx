import Bio from "@/components/bio";
import About from "@/components/about";
import Socials from "@/components/socials";
import Projects from "@/components/projects";
import Bottom from "@/components/bottom";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <>
      <main className="flex grow flex-col justify-center gap-10">
        <Bio />
        <About />
        <Socials />
        <Projects />
        <Contact />
      </main>
      <div className="fixed right-4 bottom-4 hsm:bottom-8 left-4">
        <Bottom />
      </div>
    </>
  );
}
