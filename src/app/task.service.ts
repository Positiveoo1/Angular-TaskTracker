import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private localStorageKey = 'tasks';
  constructor() { }

  getTasks(): any[] {
    const tasksJson = localStorage.getItem(this.localStorageKey);
    return tasksJson ? JSON.parse(tasksJson) : [];
  }

  saveTasks(tasks: any[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(tasks));
  }

  createTask(task: any): void {
    const tasks = this.getTasks();
    tasks.push(task);
    this.saveTasks(tasks);
  }

  editTask(title: string, status: string, assignees: string): void {
    const tasks = this.getTasks();
    const index = tasks.findIndex(task => task.title === title);
    if (index !== -1) {
      if (status) tasks[index].status = status;
      if (assignees) tasks[index].assignees = assignees;
      this.saveTasks(tasks);
    }
  }
}
