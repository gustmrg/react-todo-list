import { Task, TaskProps } from "./Task";
import { v4 as uuidv4 } from "uuid";

import styles from "./TasksList.module.css";
import clipboardImage from "../assets/Clipboard.png";

export function TasksList() {
  const tasks: TaskProps[] = [
    {
      id: uuidv4(),
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ea?",
      isComplete: false,
    },
    {
      id: uuidv4(),
      title:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad mollitia, recusandae provident incidunt error praesentium aut, consectetur amet rem ut ipsam, tempora repellat. Eius, amet ut quasi harum eum ducimus?",
      isComplete: false,
    },
    {
      id: uuidv4(),
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ea?",
      isComplete: true,
    },
  ];

  if (tasks.length === 0) {
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
              Tarefas criadas <span>3</span>
            </p>
          </div>
          <div className={styles.tasks_done}>
            <p>
              Tarefas concluídas <span>1 de 3</span>
            </p>
          </div>
        </div>
        <div className={styles.tasks_list}>
          {tasks.map((task) => {
            return (
              <Task
                key={task.id}
                id={task.id}
                title={task.title}
                isComplete={task.isComplete}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
