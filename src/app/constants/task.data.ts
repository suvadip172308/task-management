import { Task, TaskStatus } from '../models/task.model';

export const TASK_DATA: Task[] = [
  {
    id: '1234',
    title: 'Study Angular',
    description: 'Start from the basic and level up gradually',
    status: TaskStatus.INCOMPLETE
  },
  {
    id: '1235',
    title: 'Study React',
    description: 'Start from the basic and level up gradually',
    status: TaskStatus.INCOMPLETE
  }
];