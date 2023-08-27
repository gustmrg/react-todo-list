import { Header } from "./components/Header";
import { TasksList } from "./components/TasksList";

import "./global.css";

export function App() {
  return (
    <main>
      <Header />
      <TasksList />
    </main>
  );
}
