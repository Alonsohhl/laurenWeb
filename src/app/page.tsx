// import Image from "next/image";
// import { DesktopMenu } from "@/components/ui/menu";
import { Hero } from "@/components/home/hero";
import { Portfolio } from "@/components/home/sections/portfolio";
import { About } from "@/components/home/sections/aboutme";
import { Contact } from "@/components/home/sections/contact";

export default function Home() {
  return (
    <section className="bg-background  flex-1">
      <Hero />
      <Portfolio />
      <About />
      <Contact />
    </section>
  );
}
