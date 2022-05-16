import { Component, OnInit } from '@angular/core';
import {Task} from '../app.task.model';
import { TaskService } from '../task.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {


  Tasks:Task[] =[];
  private tasksSub: Subscription | undefined;


  panelOpenState = false;

  constructor(public taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks();
    console.log("inside list",this.Tasks);
    this.tasksSub = this.taskService.getTaskUpdateListener().subscribe((Tasks: Task[]) => {
        this.Tasks = Tasks;
    console.log("List of task",this.Tasks);
      });
  }
  ngOnDestroy(): void {
    this.tasksSub?.unsubscribe();
  }
  onDelete(taskId: string | undefined){
    this.taskService.deleteTask(taskId);
  }


}
