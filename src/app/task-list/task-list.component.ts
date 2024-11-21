import { Component } from '@angular/core';
import {TaskService} from '../service/task.service'
import {Task} from '../interface/task'
import {CommonModule} from '@angular/common'
@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
   constructor(private taskService:TaskService){}

   removeTasks(id:number):void{
      this.taskService.removeTask(id);
   }

   get tasks():Task[]{
      return this.taskService.getTasks();
   }


   toggleTaskCompletion(task:Task):void{
      this.taskService.toggleTaskComplete(task.id);
   }



}
