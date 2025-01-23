// import Image from "next/image";
// import styles from "./page.module.css";
import Header from "@/components/base/header";
import Top from "@/section/top";
import AboutMe from "@/section/about";
import Skills from "@/section/skill";
import Historys from "@/section/historys ";
import Products from "@/section/producut";
import Contact from "@/section/contact";
import Footer from "@/components/base/footer";
export default function Home() {
  return (
    <div>
      <Header />
      <Top />
      <AboutMe />
      <Skills />
      <Historys />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}
