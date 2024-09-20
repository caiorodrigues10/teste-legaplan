import styles from "@/app/page.module.scss";
import { NavBar } from "@/components/NavBar";
import { CardListItems } from "@/components/page/home/CardListItems";

export default function Home() {
  return (
    <div className={styles.container}>
      <NavBar />
      <section className={styles.content}>
        <CardListItems />
      </section>
    </div>
  );
}
