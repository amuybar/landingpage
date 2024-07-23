
import Landing from "@/components/Landing";
import Explore from "@/components/Explore";
import Navbar from "@/components/Navbar"
import styles from "./page.module.css";
import Links from "@/components/Links";
import ServiceHighlightCarousel from "@/components/ServiceHighlightCarousel";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar/>
     <Landing/>
     <Explore/>
     <Links/>
     <ServiceHighlightCarousel/>
    </main>
  );
}
