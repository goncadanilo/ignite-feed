import igniteLogo from "../../assets/ignite-feed.svg";
import styles from "./styles.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logo do Ignite Feed" />
    </header>
  );
}
