export enum TaskStatus {
  COMPLETE = 'Complete',
  INCOMPLETE = 'Incomplete',
}

export enum FilterBy {
  ALL = 'All',
  COMPLETE = 'Complete',
  INCOMPLETE = 'Incomplete',
}

export interface Task {
  id: string,
  title: string,
  description: string,
  status: TaskStatus,
}

export interface AddTask {
  title: string,
  description: string,
  status: TaskStatus,
}