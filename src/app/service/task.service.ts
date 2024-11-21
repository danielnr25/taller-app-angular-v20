import { Injectable } from '@angular/core';
import { Task } from '../interface/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];
  private nextId:number = 1;

  constructor() {
   this.loadTasks();
  }

  private saveTasks():void{
   localStorage.setItem('tasks',JSON.stringify(this.tasks));
  }

  // método para obtener todas las tareas
  private loadTasks(): void{
      const savedTasks = localStorage.getItem('tasks');
      if(savedTasks){
         this.tasks = JSON.parse(savedTasks);
         this.nextId = this.tasks.length ? Math.max(...this.tasks.map(task=>task.id)) + 1:1;
      }
  }

  getTasks():Task[]{
   return this.tasks;
  }

  // método para crear las tareas
  addTask(title:string,description:string):void{
      this.tasks.push({id:this.nextId++,title,description, completed:false})
      console.log(this.tasks);
      this.saveTasks();
      // []
      //[{id:1,title:Mi primera appdecription: Mi primera app xyz,completed:false 
      //},{}]
   }

   // const task = (task) => task :: funcion flecha

  // metodo de eliminar una tarea
   removeTask(id:number):void{
      this.tasks = this.tasks.filter((task) => task.id !== id);
      this.saveTasks();
   }

  // metodo de completar una tarea
  toggleTaskComplete(id:number):void{
   const task = this.tasks.find(task =>task.id ===id);
   if(task){  
      task.completed = !task.completed;
      this.saveTasks();
   }
  }
}
