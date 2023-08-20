import styles from './Body.module.css';
import { NewTaskBar } from './NewTaskBar';
import { EmyptTasks } from './EmyptTasks';
import { TasksCount } from './TasksCount';
import { Tasks } from './Tasks';

export function Body() {
  return (
    <main className={ styles.body }>
      <NewTaskBar />
      <TasksCount />
      {/* <EmyptTasks /> */}
      <Tasks />
    </main>
  )
}