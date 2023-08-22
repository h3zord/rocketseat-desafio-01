import { ITaskCountProps } from '../interfaces/ITaskCountProps'
import styles from './TasksCount.module.css'

export function TasksCount({ taskList }: ITaskCountProps) {
  function countDoneTasks(): string {
    const doneTasks = taskList.reduce((index, task) => {
      if (task.isDone) return index + 1
      return index
    }, 0)

    return `${doneTasks} de ${taskList.length}`
  }

  return (
    <section className={styles.tasksCount}>
      <p>
        Tarefas criadas <span>{taskList.length}</span>
      </p>
      <p>
        Tarefas concluídas <span>{taskList.length ? countDoneTasks() : 0}</span>
      </p>
    </section>
  )
}
