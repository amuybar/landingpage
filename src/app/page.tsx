
import Landing from "@/components/Landing";
import Navbar from "@/components/Navbar"
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar/>
     <Landing/>
    </main>
  );
}
