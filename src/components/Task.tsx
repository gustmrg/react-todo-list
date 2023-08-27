import { Trash } from "@phosphor-icons/react";

import styles from "./Task.module.css";

export interface TaskProps {
  id: string;
  title: string;
  isComplete: boolean;
  onDelete: (task: TaskProps) => void;
  onComplete: (task: TaskProps) => void;
}

export function Task({
  id,
  title,
  isComplete,
  onDelete,
  onComplete,
}: TaskProps) {
  function handleDeleteTask() {
    onDelete({ id, title, isComplete, onDelete, onComplete });
  }

  function handleCompleteTask() {
    onComplete({ id, title, isComplete, onDelete, onComplete });
  }

  return (
    <div className={styles.task}>
      <div className={styles.custom_checkbox} onClick={handleCompleteTask}>
        <input id={id} type="checkbox" checked={isComplete} />
        <label htmlFor={id}></label>
      </div>
      <p className={isComplete ? styles.completed : styles.incomplete}>
        {title}
      </p>
      <div className={styles.delete_button}>
        <button title="Apagar tarefa" onClick={handleDeleteTask}>
          <Trash size={24} className={styles.icon} />
        </button>
      </div>
    </div>
  );
}
