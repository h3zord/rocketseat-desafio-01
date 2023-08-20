import styles from './TasksCount.module.css';

export function TasksCount() {
  return (
    <section className={ styles.tasksCount }>
      <span>Tarefas criadas 0</span>
      <span>Tarefas concluídas 0</span>
    </section>
  )
}