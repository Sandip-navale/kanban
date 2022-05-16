import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskService } from '../task.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-taskcreate',
  templateUrl: './taskcreate.component.html',
  styleUrls: ['./taskcreate.component.css']
})
export class TaskcreateComponent implements OnInit {
  task_name="";
  task_description="";
  assignee="";
  start_date="";
  due_date="";

  constructor(public taskService: TaskService, public route: ActivatedRoute) { }

  ngOnInit(): void {}

  submitTask(form: NgForm){
    // addTask function directly written in the submit form
    // when the form will be submitted it will automatically add the details
    this.taskService.addTaskService(
      form.value.task_name,
      form.value.task_description,
      form.value.assignee,
      form.value.start_date,
      form.value.due_date,

    );
  }

  }
