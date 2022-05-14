import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-taskcreate',
  templateUrl: './taskcreate.component.html',
  styleUrls: ['./taskcreate.component.css']
})
export class TaskcreateComponent implements OnInit {

  constructor(public taskService: TaskService) { }
  addTask(form: NgForm) {}

  ngOnInit(): void {
  }
  priorities = ['High', 'Medium', 'Low'];
  statuses = ['ToDo', 'InProgress', 'done'];
  submitForm(taskForm: NgForm) {
    // addTask function directly written in the submit form
    // when the form will be submitted it will automatically add the details
    this.taskService.addTaskService(
      taskForm.value.task_title,
      taskForm.value.task_description,
      taskForm.value.assignee,
      taskForm.value.deadline,
      taskForm.value.status,
      taskForm.value.priority,
    );
    taskForm.resetForm();
    // console.log(taskForm.value);
  }
}
