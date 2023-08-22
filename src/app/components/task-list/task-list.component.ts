import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';

import { TaskService } from '../../services/task.service';
import { Task, TaskStatus } from '../../models/task.model';
import { FilterBy } from '../../models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks$: Observable<Task[]> = EMPTY;
  taskStatus = TaskStatus;
  filterItems = [
    FilterBy.ALL,
    FilterBy.COMPLETE,
    FilterBy.INCOMPLETE,
  ];
  
  constructor(
    private taskService: TaskService,
  ) {}
  
  ngOnInit(): void {
    this.tasks$ = this.taskService.task$;
  }

  onMarkComplete(task: Task) {
    this.taskService.updateTask(task);
  }

  onFilterChange(filterItem: string) {
    this.taskService.filterTask(filterItem);
  }
}
