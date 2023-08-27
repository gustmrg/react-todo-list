import { useState, useRef, ChangeEvent, FormEvent } from "react";
import { PlusCircle } from "@phosphor-icons/react";
import { v4 as uuidv4 } from "uuid";
import { EmptyList } from "./EmptyList";
import { Task, TaskProps } from "./Task";

import styles from "./TasksList.module.css";

export function TasksList() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [createdTasks, setCreatedTasks] = useState(0);
  const [completedTasks, setCompletedTasks] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleCreateNewTask(event: FormEvent<HTMLFormElement>) {
    event?.preventDefault();
    console.log(newTaskTitle);

    setTasks([
      ...tasks,
      { id: uuidv4(), title: newTaskTitle, isComplete: false },
    ]);

    setNewTaskTitle("");
    setCreatedTasks(createdTasks + 1);
  }

  function handleNewTaskInputChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskTitle(event?.target.value);
  }

  function deleteTask() {}

  return (
    <div className={styles.wrapper}>
      <form className={styles.create_task} onSubmit={handleCreateNewTask}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          ref={inputRef}
          value={newTaskTitle}
          onChange={handleNewTaskInputChange}
        />
        <button type="submit" disabled={newTaskTitle.trim() === ""}>
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
