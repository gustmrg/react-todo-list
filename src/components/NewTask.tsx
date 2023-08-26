import { PlusCircle } from "@phosphor-icons/react";

import styles from "./NewTask.module.css";

export function NewTask() {
  return (
    <div className={styles.create_task}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button>
        Criar <PlusCircle size={16} />
      </button>
    </div>
  );
}
