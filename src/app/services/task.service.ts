import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Task, AddTask, TaskStatus, FilterBy } from '../models/task.model';
import { TASK_DATA } from '../constants/task.data';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private taskData = TASK_DATA;

  taskSub = new BehaviorSubject<Task[]>(this.taskData);
  task$ = this.taskSub.asObservable();
  
  getTasks(): void {
    this.taskSub.next(this.taskData);
  }

  addTask(task: AddTask): void {
    const newTask = {
      id: `${Math.floor(Math.random() * 100)}`,
      ...task
    };

    this.taskData = [
      ...this.taskData,
      newTask
    ];

    this.taskSub.next(this.taskData);
  }

  updateTask(updateTask: Task): void {
    this.taskData = this.taskData.map((task: Task) => {
      return task.id === updateTask.id ? { ...task, status: TaskStatus.COMPLETE } : task;
    });

    this.taskSub.next(this.taskData);
  }

  filterTask(filter: string) {
    const filteredRes = this.taskData.filter(task =>  {
      return filter === FilterBy.ALL ? true : filter === task.status;
    });
    this.taskSub.next(filteredRes);
  }
}
