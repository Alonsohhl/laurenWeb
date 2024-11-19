// import Image from "next/image";
// import { DesktopMenu } from "@/components/ui/menu";
import { Hero } from "@/components/home/hero";
import { Portfolio } from "@/components/home/sections/portfolio";
import { About } from "@/components/home/sections/aboutme";

export default function Home() {
  return (
    <section className="bg-background h-[200vh] flex-1">
      <Hero />
      <Portfolio />
      <About />
    </section>
  );
}
