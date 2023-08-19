import styles from './Body.module.css';
import { NewTaskBar } from './NewTaskBar';

export function Body() {
  return (
    <main className={ styles.body }>
      <NewTaskBar />
    </main>
  )
}