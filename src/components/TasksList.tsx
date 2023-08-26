import { Task } from "./Task";

import styles from "./TasksList.module.css";
import clipboardImage from "../assets/Clipboard.png";

export function TasksList() {
  const tasksList: string[] = ["Task 1", "Task 2"];

  if (tasksList.length == 0) {
    return (
      <div className={styles.tasks}>
        <div className={styles.tasks_info}>
          <div className={styles.tasks_created}>
            <p>
              Tarefas criadas <span>0</span>
            </p>
          </div>
          <div className={styles.tasks_done}>
            <p>
              Tarefas concluídas <span>0</span>
            </p>
          </div>
        </div>
        <div className={styles.tasks_list__empty}>
          <img src={clipboardImage} alt="Imagem de uma prancheta" />
          <div>
            <h4>Você ainda não tem tarefas cadastradas</h4>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.tasks}>
        <div className={styles.tasks_info}>
          <div className={styles.tasks_created}>
            <p>
              Tarefas criadas <span>0</span>
            </p>
          </div>
          <div className={styles.tasks_done}>
            <p>
              Tarefas concluídas <span>0</span>
            </p>
          </div>
        </div>
        <div className={styles.tasks_list}>
          <Task />
        </div>
      </div>
    );
  }
}
