import styles from './Body.module.css';
import { useState, ChangeEvent } from 'react';
import { NewTaskBar } from './NewTaskBar';
import { EmyptTasks } from './EmyptTasks';
import { TasksCount } from './TasksCount';
import { Tasks } from './Tasks';
import { ITaskList } from '../interfaces/ITaskList';
import { v4 as uuidv4 } from 'uuid'

export function Body() {
  const [taskList, setTaskList] = useState<ITaskList[]>([]);

  function addNewTask(event: ChangeEvent<HTMLFormElement>): void {
    event.preventDefault();

    const newTask: ITaskList = {
      id: uuidv4(),
      content: event.target.inputTask.value,
      isDone: false,
    }

    setTaskList((state) => {
      event.target.inputTask.value = '';
      return [...state, newTask]
    })
  }

  function deleteTask(taskId: string): void {
    const newTaskList = taskList.filter(({ id }) => taskId !== id)
  
    setTaskList(newTaskList);
  }

  function doneTask(id: string): void {

    const updatedTasks = taskList.map((task) => {
      if (task.id === id) {
        return { ...task, isDone: !task.isDone }
      }
  
      return task;
    })
  
    setTaskList(updatedTasks);
  }

  return (
    <main className={ styles.body }>
      <NewTaskBar addNewTask={ addNewTask }/>
      <TasksCount taskList={ taskList } />
      { taskList.length ?
        <Tasks taskList={ taskList } deleteTask={ deleteTask } doneTask={ doneTask } /> 
        : 
        <EmyptTasks />
      }
    </main>
  )
}