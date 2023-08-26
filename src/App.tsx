import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { TasksList } from "./components/TasksList";

import styles from "./App.module.css";

import "./global.css";

export function App() {
  return (
    <>
      <Header />
      <NewTask />
    </>
  );
}
