import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  editTaskForm = this.fb.group({
    taskName: ['', Validators.required],
    priority: ['', Validators.required],
    date: ['', Validators.required]
  });
  id:any;
  task = {};
  constructor(private fb:FormBuilder, private ds:DataService, private router: Router, private activeRoute:ActivatedRoute) { 
    this.activeRoute.params.subscribe(data => this.id = data.id)
    this.task = (ds.getUserDetails()).find(task => task.id == this.id)
    console.log(this.task)
    this.editTaskForm.setValue({
      taskName :  this.task['taskName'],
      priority : this.task['priority'],
      date: this.task['date']
    })
  }

  ngOnInit(): void {
  }

  editTask(){
    this.ds.editTask(this.id,this.editTaskForm.value);
    this.router.navigate(['/tasks']);
  }

  getControl(controlName){
    return this.editTaskForm.get(controlName);
  }

}
