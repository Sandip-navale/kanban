import { Injectable } from '@angular/core';
import { Task } from './app.task.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [];
  private updatedTasks = new Subject<Task[]>();
  //constructor() {}
  getTasks(){
    //return [...this.posts];
    this.http.get<{message:string, tasks:any}>('http://localhost:3000/api/tasks')
    .pipe(map((taskData)=>{
      return taskData.tasks.map((task:any) =>{
        return {
          task_title: task.task_title,
          task_description: task.task_description,
          assignee: task.assignee,
          deadline: task.Date,
          status: task.status,
          priority: task.priority,
          id: task._id
        }
      })
    }))
    .subscribe((transformedData)=>{
      console.log(transformedData);
      this.tasks = transformedData;
      this.updatedTasks.next([...this.tasks]);
    })
  }

  addTaskService(
    task_title: string,
    task_description: string,
    assignee: string,
    deadline: Date ,
    status: string,
    priority: string
  ) {
    const task: Task = {
      id : null!,
      task_title: task_title,
      task_description: task_description,
      assignee: assignee,
      deadline: deadline ,
      status: status,
      priority: priority,
    };
    this.tasks.push(task);
    console.log('Added', task);
    this.updatedTasks.next([...this.tasks]);
    console.log("*****************************",task);
    this.http.post<{message: string; taskId: string}>('http://localhost:3000/api/tasks',task)
    .subscribe((responseData)=>{
    const id = responseData.taskId;
    task.id = id;
    console.log("*****Server Responded", responseData);
    this.tasks.push(task);
    this.updatedTasks.next([...this.tasks]);
  });
  }


  /*getTasks() {
    return [...this.tasks];
  }*/
  getTask(id: string | undefined){
    //this.posts.find(post => post.id ===id);
    return this.tasks.find(task => task.id ===id);
  }

  getTaskUpdateListener() {
    return this.updatedTasks.asObservable();
  }

  constructor(private http:HttpClient) { }
}
