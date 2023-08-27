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
      <div className={styles.create_task}>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button onClick={handleNewTask}>
          Criar <PlusCircle size={16} />
        </button>
      </div>
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
        {tasks.length === 0 ? (
          <EmptyList />
        ) : (
          <Task
            key={tasks[0].id}
            id={tasks[0].id}
            title={tasks[0].title}
            isComplete={tasks[0].isComplete}
          />
        )}
      </div>
    </div>
  );
}

/*else {
    return (
      <div className={styles.tasks}>
        <div className={styles.tasks_info}>
          <div className={styles.tasks_created}>
            <p>
              Tarefas criadas <span>{createdTasks}</span>
            </p>
          </div>
          <div className={styles.tasks_done}>
            <p>
              Tarefas concluídas{" "}
              <span>
                {completedTasks} de {createdTasks}
              </span>
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
      </div> */
