import styles from './NewTaskBar.module.css';
import { PlusCircle } from "@phosphor-icons/react"

export function NewTaskBar() {
  return (
    <section className={ styles.addNewTask }>
      <input
        placeholder='Adicione uma nova tarefa'
      />
      <button>
        Criar <PlusCircle size={22}/>
      </button>
    </section>
  )
}