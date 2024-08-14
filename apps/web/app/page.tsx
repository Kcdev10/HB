// import Header from "ui";
import About from "@repo/ui/components/about";
import Footer from "@repo/ui/components/footer/footer";
import Getintouch from "@repo/ui/components/getintouch";
import Header from "@repo/ui/components/header/header";
import HeroMain from "@repo/ui/components/hero-main";
import Projects from "@repo/ui/components/projects";

export default function Home() {
  return (
    <main className="">
      <Header />
      <HeroMain />
      <About />
      <Projects />
      <Getintouch />
      <Footer />
    </main>
  );
}
