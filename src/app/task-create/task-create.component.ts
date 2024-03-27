import { Component } from '@angular/core';
import { TaskService } from '../task.service';
@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrl: './task-create.component.css'
})
export class TaskCreateComponent {


  task = {
    title: '',
    description: '',
    deadline: '',
    priority: '',
    assignees: ''
  };

  constructor (private taskService: TaskService) {}

  onSubmit(): void {
    this.taskService.createTask(this.task);
    this.task = {
      title: '',
      description: '',
      deadline: '',
      priority: '',
      assignees: ''
    };
  }
}
