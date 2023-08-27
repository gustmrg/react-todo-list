import clipboardImage from "../assets/Clipboard.png";

import styles from "./EmptyList.module.css";

export function EmptyList() {
  return (
    <div className={styles.empty_list}>
      <img src={clipboardImage} alt="Imagem de uma prancheta" />
      <div>
        <h4>Você ainda não tem tarefas cadastradas</h4>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}
