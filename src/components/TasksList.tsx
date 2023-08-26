import { ClipboardText } from "@phosphor-icons/react";

import styles from "./TasksList.module.css";
import clipboardImage from "../assets/Clipboard.png";

export function TasksList() {
  const tasksList: string[] = [];
  console.log(tasksList.length);

  if (tasksList.length == 0) {
    return (
      <div className={styles.container_tasks}>
        <img src={clipboardImage} alt="Imagem de uma prancheta" />
        <div>
          <h4>Você ainda não tem tarefas cadastradas</h4>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </div>
    );
  }
}
