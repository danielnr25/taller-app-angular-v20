import { Component } from '@angular/core';
import {TaskService} from '../service/task.service'
import {FormsModule} from '@angular/forms'
@Component({
  selector: 'app-task-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-input.component.html',
  styleUrl: './task-input.component.css'
})
export class TaskInputComponent {
   title:string = '';
   description:string = '';

   constructor(private taskService:TaskService){}

   addTasks():void{
      if(this.title.trim() && this.description.trim()){
        // console.log(this.title);
        // console.log(this.description);
         this.taskService.addTask(this.title, this.description);
         this.title = '';
         this.description = '';
      }
   }


}
