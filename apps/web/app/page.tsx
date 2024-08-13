import Header from "../../../packages/ui/src/components/header/header";
import HeroMain from "../../../packages/ui/src/components/hero-main";
import About from "../../../packages/ui/src/components/about";
import Project from "../../../packages/ui/src/components/projects";
import Getintouch from "../../../packages/ui/src/components/getintouch";
import Footer from "../../../packages/ui/src/components/footer/footer";

export default function Home() {
  return (
    <main className="">
      <Header />
      <HeroMain />
      <About />
      <Project />
      <Getintouch />
      <Footer />
    </main>
  );
}
