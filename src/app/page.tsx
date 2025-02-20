// import Image from "next/image";
// import styles from "./page.module.css";
import Top from '@/section/top';
import AboutMe from '@/section/about';
import Skills from '@/section/skill';
import Historys from '@/section/historys ';
import Products from '@/section/producut';
import Contact from '@/section/contact';
export default function Home() {
  return (
    <div>
      <Top />
      <AboutMe />
      <Skills />
      <Historys />
      <Products />
      <Contact />
    </div>
  );
}
