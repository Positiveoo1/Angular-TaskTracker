import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {
  tasks: any[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  editTask(title: string): void {
    const newStatus = prompt('Enter new status:');
    if (newStatus !== null) {
      const newAssignees = prompt('Enter new assignees:');
      if (newAssignees !== null) {
        this.taskService.editTask(title, newStatus, newAssignees);
        this.tasks = this.taskService.getTasks();
      }
    }
  }
  
}
