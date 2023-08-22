import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { TaskStatus } from '../../models/task.model';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.scss']
})
export class TaskAddComponent {
  toggleTask = false;

  addTaskForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
  });

  constructor(
    private taskService: TaskService,
  ) {}
  
  onToggleTask() {
    this.toggleTask = !this.toggleTask;
  }

  onCancel() {
    this.addTaskForm.get('title')?.setValue('');
    this.addTaskForm.get('description')?.setValue('');
  }

  onSubmit() {
    const title = this.addTaskForm.get('title')?.value?.trim();
    const description = this.addTaskForm.get('description')?.value?.trim() ?? '';

    if(!title) {
      return;
    }

    this.taskService.addTask({
      title,
      description,
      status: TaskStatus.INCOMPLETE,
    })

    this.onCancel();
  }
}
