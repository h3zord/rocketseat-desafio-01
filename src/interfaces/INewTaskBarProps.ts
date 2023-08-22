import { ChangeEvent } from 'react'

export interface INewTaskBarProps {
  addNewTask: (event: ChangeEvent<HTMLFormElement>) => void
}
