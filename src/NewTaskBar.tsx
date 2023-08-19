import styles from './NewTaskBar.module.css';

export function NewTaskBar() {
  return (
    <section >
      <input className={ styles.taskInput } />
      <button>Criar</button>
    </section>
  )
}