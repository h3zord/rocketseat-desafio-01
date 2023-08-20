import styles from './Tasks.module.css';
import { Trash } from '@phosphor-icons/react'

export function Tasks() {
  return (
    <section className={ styles.tasksList }>
      <div className={ styles.task }>
        <div className={ styles.taskContent }>
          <input type="checkbox" id='teste'/>
          <label htmlFor="teste">Test</label>
        </div>
        <button>
          <Trash size={24} color='#808080'/>
        </button>
      </div>
    </section>
  )
}