import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { TasksList } from "./components/TasksList";

import styles from "./App.module.css";

import "./global.css";

export function App() {
  return (
    <main>
      <Header />
      <div className={styles.wrapper}>
        <NewTask />
        <TasksList />
      </div>
    </main>
  );
}
