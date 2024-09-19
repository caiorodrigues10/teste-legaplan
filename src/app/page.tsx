import { Button } from "@/components/Button";
import { NavBar } from "@/components/NavBar";
import styles from "@/app/page.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <NavBar />
      <Button>Adicionar nova tarefa</Button>
    </div>
  );
}
