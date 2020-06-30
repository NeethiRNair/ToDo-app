import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  newTaskForm = this.fb.group({
    taskName:['', Validators.required],
    priority:['', Validators.required],
    date:['', Validators.required]
  });
  constructor(private ds:DataService, private fb:FormBuilder, private router:Router) { 
    this.tasks = ds.getUserDetails(); 
    
  }
  
  ngOnInit(): void {
  }
  tasks=[];
  dates=[];
  
  deleteTask(id){
    this.tasks =this.ds.deleteTask(id);
  }
  editTask(idno){
    const currentTask = this.tasks.find(task => task.id == idno)
    this.router.navigate([`/edit-task/${currentTask.id}`]);

  }
  addNewTask(){    
    this.tasks = this.ds.addNewTask(this.newTaskForm.value); 
    
  }
  changeStatus(id){
    this.tasks =this.ds.changeStatus(id);
    console.log(this.tasks)
  }
  getControl(controlName){
    return this.newTaskForm.get(controlName);
  }
}
