import { PlusCircle } from "@phosphor-icons/react";
import { Header } from "./components/Header";

import styles from "./App.module.css";

import "./global.css";

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button>
          Criar <PlusCircle size={16} />
        </button>
      </div>
    </>
  );
}
