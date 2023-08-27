import { Trash } from "@phosphor-icons/react";

import styles from "./Task.module.css";

export interface TaskProps {
  id: string;
  title: string;
  isComplete: boolean;
}

export function Task({ title, isComplete }: TaskProps) {
  function handleDeleteTask() {
    console.log("Tarefa apagada!");
  }

  return (
    <div className={styles.task}>
      <div>
        <input type="checkbox" />
        <label></label>
      </div>
      <p
        className={
          isComplete ? `${styles.title} ${styles.completed}` : styles.title
        }
      >
        {title}
      </p>
      <button title="Apagar tarefa" onClick={handleDeleteTask}>
        <Trash size={18} className={styles.icon} />
      </button>
    </div>
  );
}
