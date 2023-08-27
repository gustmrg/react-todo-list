import { useState } from "react";
import { EmptyList } from "./EmptyList";
import { Task, TaskProps } from "./Task";
import { v4 as uuidv4 } from "uuid";
import { PlusCircle } from "@phosphor-icons/react";

import styles from "./TasksList.module.css";

export function TasksList() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [createdTasks, setCreatedTasks] = useState(0);
  const [completedTasks, setCompletedTasks] = useState(0);

  const handleNewTask = () => {
    event?.preventDefault();
    var newTask = {
      id: uuidv4(),
      title: "Lorem ipsum dolor sit amet.",
      isComplete: false,
    };
    console.log("Tarefa criada!");
    var newTasks = [...tasks, newTask];
    setTasks(newTasks);
    setCreatedTasks(createdTasks + 1);
  };

  //setCreatedTasks(1);

  return (
    <div className={styles.wrapper}>
      <form className={styles.create_task} onSubmit={handleNewTask}>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button type="submit">
          Criar <PlusCircle size={16} />
        </button>
      </form>
      <div className={styles.tasks}>
        <div className={styles.tasks_info}>
          <div className={styles.tasks_created}>
            <p>
              Tarefas criadas <span>{createdTasks}</span>
            </p>
          </div>
          <div className={styles.tasks_done}>
            {createdTasks === 0 ? (
              <p>
                Tarefas concluídas <span>{createdTasks}</span>
              </p>
            ) : (
              <p>
                Tarefas concluídas{" "}
                <span>
                  {completedTasks} de {createdTasks}
                </span>
              </p>
            )}
          </div>
        </div>
        <div className={styles.tasks_list}>
          {tasks.length === 0 && <EmptyList />}
          {tasks.length !== 0 &&
            tasks.map((task) => {
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
    </div>
  );
}
