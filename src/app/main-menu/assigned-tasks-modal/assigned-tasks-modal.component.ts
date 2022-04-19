import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/shared/task.model';
@Component({
  selector: 'app-assigned-tasks-modal',
  templateUrl: './assigned-tasks-modal.component.html',
  styleUrls: ['./assigned-tasks-modal.component.scss']
})
export class AssignedTasksModalComponent {

  tasks: Task[] = [
    {
      title: '1st task',
      description: 'create documentation for app',
      isImportant: false,
    },

    {
      title: '2nd project',
      description: 'send CV',
      isImportant: true,
    },
  ];

  selectedTask: Task | null = null;

  constructor() { }

  deleteTask() {
    if (this.selectedTask) {
      const index = this.tasks.indexOf(this.selectedTask);

      this.tasks.splice(index, 1);
      this.selectedTask = null;
    } else {
      console.error('Error: User is able to use deleteTask method without selecting task before');
    }
  }
}
