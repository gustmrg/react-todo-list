import { Task, TaskProps } from "./Task";

import styles from "./TasksList.module.css";
import clipboardImage from "../assets/Clipboard.png";

export function TasksList() {
  const tasksList: TaskProps[] = [
    {
      id: "sdfsadfd",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ea?",
      isComplete: false,
    },
    {
      id: "sdfsadf123d",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ea?",
      isComplete: false,
    },
    {
      id: "sdfsadfasdasdsdd",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ea?",
      isComplete: true,
    },
  ];

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
          {tasksList.map((task) => {
            return (
              <Task
                key={task.id}
                id={task.id}
                description={task.description}
                isComplete={task.isComplete}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
