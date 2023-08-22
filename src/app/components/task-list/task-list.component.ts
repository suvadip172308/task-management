import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";

import { TaskService } from '../../services/task.service';
import { EMPTY, Observable } from 'rxjs';
import { Task, TaskStatus } from 'src/app/models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks$: Observable<Task[]> = EMPTY;
  taskStatus = TaskStatus;
  filterItems = [
    'All',
    TaskStatus.COMPLETE,
    TaskStatus.INCOMPLETE,
  ];

  selectedItem = this.filterItems[0];

  filterForm = this.fb.group({
    filterItem: [this.selectedItem]
  })
  
  constructor(
    private taskService: TaskService,
    private fb: FormBuilder,
  ) {}
  
  ngOnInit(): void {
    this.tasks$ = this.taskService.task$;

  }

  onMarkComplete(task: Task) {
    this.taskService.updateTask(task);
  }

  onFilterItem() {
    const filterItem = this.filterForm.get('filterItem')?.value ?? 'All';

    this.taskService.filterTask(filterItem);
  }
}
