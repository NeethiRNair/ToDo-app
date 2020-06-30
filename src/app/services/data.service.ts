import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  activeUser={};
  userName: string ="";
  
  users = {
    userName1 : { firstName:'User', lastName:'1', password:'pwd1', email:'user1@example.com',tasks:[/* {
      id:7963,
      taskName : 'Warm Water',
      done: true,
      priority: 1,
      date : new Date()
    },
    {
      id:7965,
      taskName : 'Workout',
      done: false,
      priority: 2,
      date : new Date()
    } */]},
    userName2 : { firstName:'User', lastName:'2', password:'pwd2', email:'user2@example.com', tasks:[]}
  }

  constructor() {
    
    const userData = JSON.parse(localStorage.getItem('users'));
    if(userData){
      this.users = userData;
    }
    
    const activeUser = localStorage.getItem('activeUser');
    const activeUserData = JSON.parse(activeUser);
    if(activeUserData){
      this.activeUser = activeUserData;
    }
    this.userName = localStorage.getItem('userName');
  }

  
  getUserDetails(){
    
    return this.users[this.userName].tasks;
  }
  
  addNewTask(data ){
     this.users[this.userName].tasks.push({
      id: Math.floor(Math.random()*10000),
      taskName : data.taskName,
      done: false,
      priority: data.priority,
      date : data.date
      
    }) 
    this.saveUserData();
    
    return (this.users[this.userName].tasks)
  }

  saveUserData(){
    localStorage.setItem('activeUser', JSON.stringify(this.activeUser));
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  login(userName, password){
    if(userName in this.users){
      const pwd=this.users[userName].password;
      if(password == pwd){
        localStorage.setItem('userName', userName);
        this.userName = userName;
        this.activeUser = this.users[userName];
        this.saveUserData();
        
        return true;
      }
      else{
        return false;
      }
    }
  }

  register(data){
    this.users[data.userName]={
      firstName: data.firstName,
      lastName: data.lastName,
      password: data.password,
      email: data.email,
      tasks:[]
    }
    this.saveUserData();
    
    alert('Registration Successfull!!!');

  }

  editTask(id,data){
    const task = this.users[this.userName].tasks.find(task => task.id == id);
    task.taskName = data.taskName;
    task.priority = data.priority;
    task.date = data.date;
    this.saveUserData()
    alert("Task successfully edited")
  }

  deleteTask(id){
    this.users[this.userName].tasks = this.users[this.userName].tasks.filter(task => task.id !== id);
    this.saveUserData();
    return this.users[this.userName].tasks;
    /* alert("Task deleted successfully") */
  }
  changeStatus(id){
    const task = this.users[this.userName].tasks.find(task => task.id == id);
    task.done= task.done? false : true;
    this.saveUserData();
    return this.users[this.userName].tasks;

  }
}

