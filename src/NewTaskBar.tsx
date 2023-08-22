import styles from './NewTaskBar.module.css';
import { PlusCircle } from "@phosphor-icons/react"

export function NewTaskBar({ addNewTask }) {
  return (
    <form
      onSubmit={ addNewTask }
      className={ styles.addNewTask }>
      <input
        placeholder="Adicione uma nova tarefa"
        name="inputTask"
        required
      />
      <button
        type="submit"
      >
        Criar <PlusCircle size={22}/>
      </button>
    </form>
  )
}