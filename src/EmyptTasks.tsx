import { ClipboardText } from '@phosphor-icons/react';

import styles from './EmyptTasks.module.css';

export function EmyptTasks() {
  return (
    <section className={ styles.emyptTasks }>
      <ClipboardText size={56} color='#333333'/>
      <p>Você ainda não tem tarefas cadastradas</p>
      <p>Crie tarefas e organize itens a fazer</p>
    </section> 
  )
}