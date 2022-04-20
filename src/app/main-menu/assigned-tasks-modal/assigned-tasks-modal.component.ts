import { LocalStorageService } from './../../services/local-storage.service';
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

  selectedTask: Task | null = null;

  constructor(private userService: UserService,private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    if (this.userService.UserProjectsIds) {
      const taskIds = this.localStorageService.getUsersTasksIds();

      if (taskIds) {
        const tasksIds: String[] = taskIds;
        for (let taskIdIndex = 0; taskIdIndex < tasksIds.length; taskIdIndex++) {
          // TODO: CHANGE IN 27th lane as string and solve problem with difference between String and string
          this.userService.getTask(tasksIds[taskIdIndex] as string);
          this.tasks = this.userService.tasks;
        }
      }
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
