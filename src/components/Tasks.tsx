import { ITaskProps } from '../interfaces/ITasksProps';
import styles from './Tasks.module.css';
import { Trash } from '@phosphor-icons/react'

export function Tasks({ taskList, deleteTask, doneTask }: ITaskProps) {
  return (
    <section className={ styles.tasksList }>
        {
          taskList.map(({ id, content }) => {
            return (
              <div
                key={ id }
                className={ styles.task }
              >
                <div className={ styles.taskContent }>
                  <label
                    htmlFor={ id }
                    onChange={ () => doneTask(id) }
                  >
                    <input type="checkbox" id={ id }/>
                    { content }
                  </label>
                </div>
                <button
                  type="button"
                  onClick={ () => deleteTask(id) }>
                  <Trash size={22}/>
                </button>
              </div>
            )
          })
        }
    </section>
  )
}