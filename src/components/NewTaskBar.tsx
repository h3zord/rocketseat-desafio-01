import { InvalidEvent } from 'react';
import styles from './NewTaskBar.module.css';
import { PlusCircle } from "@phosphor-icons/react"
import { INewTaskBarProps } from '../interfaces/INewTaskBarProps';

export function NewTaskBar({ addNewTask }: INewTaskBarProps) {

  function handleInvalidMessage(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Adicione uma tarefa!")
  }

  return (
    <form
      onSubmit={ addNewTask }
      className={ styles.addNewTask }>
      <input
        placeholder="Adicione uma nova tarefa"
        name="inputTask"
        required
        onInvalid={ handleInvalidMessage }
      />
      <button
        type="submit"
      >
        Criar <PlusCircle size={22}/>
      </button>
    </form>
  )
}