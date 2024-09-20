import Image from "next/image";
import styles from "./navBar.module.scss";

export function NavBar() {
  const date = new Date();

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  };
  const formattedDate = date.toLocaleDateString("pt-BR", options);

  return (
    <nav className={styles.content}>
      <Image src={"/logo.svg"} width={150} height={36} alt="FocalPoint" />

      <h2 className={styles.title}>Bem-vindo de volta Marcus</h2>

      <p className={styles.dateTime}>{formattedDate}</p>
    </nav>
  );
}
