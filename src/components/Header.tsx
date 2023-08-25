import styles from "./Header.module.css";

import todoLogo from "../assets/Logo.png";

export function Header() {
  return (
    <div className={styles.container}>
      <img src={todoLogo} />
    </div>
  );
}
