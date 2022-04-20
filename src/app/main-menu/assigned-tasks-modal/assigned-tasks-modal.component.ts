import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/shared/task.model';
@Component({
  selector: 'app-assigned-tasks-modal',
  templateUrl: './assigned-tasks-modal.component.html',
  styleUrls: ['./assigned-tasks-modal.component.scss']
})
export class AssignedTasksModalComponent implements OnInit{

  tasks: Task[] = [];

  tasksIds : String[] | null = null;
  selectedTask: Task | null = null;

  constructor(private userService: UserService) {
      if (!this.tasksIds) {
        this.tasksIds = this.userService.UserTasksIds;
      }
     }

  ngOnInit(): void {
    if (this.tasksIds) {
      for (let taskIdIndex = 0; taskIdIndex < this.tasksIds.length; taskIdIndex++) {
        const taskID = this.tasksIds[taskIdIndex];

        this.userService.getUserTask(taskID as string);
      }
      this.tasks = this.userService.tasks;
    } else {
      console.log('User has no assigned tasks');
    }
  }

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
