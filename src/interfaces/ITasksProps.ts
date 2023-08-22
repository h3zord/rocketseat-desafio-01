import { ITaskList } from './ITaskList'

export interface ITaskProps {
  taskList: ITaskList[]
  deleteTask: (id: string) => void
  doneTask: (id: string) => void
}
