import { Trash } from "@phosphor-icons/react";

import styles from "./Task.module.css";

export interface TaskProps {
  id: string;
  description: string;
  isComplete: boolean;
}

export function Task(task: TaskProps) {
  return (
    <div className={styles.task}>
      <input type="checkbox" />
      <p
        className={
          task.isComplete ? styles.description_done : styles.description
        }
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime eveniet
        et cupiditate dolor accusantium, optio dolorum asperiores! Dolor
        possimus explicabo sequi aliquam, nihil, in modi tempora cumque, iusto
        reiciendis odio?
      </p>
      <Trash size={48} className={styles.icon} />
    </div>
  );
}
